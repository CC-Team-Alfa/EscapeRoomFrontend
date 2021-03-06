import React from 'react';
import { isMobile } from 'react-device-detect';

import { reserve } from '../../functions/axiosSetup'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../css/style.css';
import Loader from '../LoaderComponent';

const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.hoover = React.createRef();
        this.state = { loading: "" };
    }

    onTermEnter = (e) => {
        let info;
        let classList = [...(e.target.classList)]
        if (classList.includes("blue"))
            info = "Your reservation";
        else if (classList.includes("red"))
            info = "Not avaliable";
        else
            info = "Free";
        this.hoover.current.style.display = "block";
        const date = new Date(e.target.dataset.date);
        this.hoover.current.innerHTML = `<b>${info}</b><br/>
                                        Day: ${date.toLocaleDateString()}<br/>
                                        At: ${date.toLocaleTimeString().substr(0, 5)}`;
    }
    onTermMove = (e) => {
        let pos = e.target.getBoundingClientRect();
        this.hoover.current.style.top = (pos.y - 60) + "px";
        this.hoover.current.style.left = (pos.x + e.target.clientWidth) + "px";
    }
    onTermLeave = (e) => {
        this.hoover.current.style.display = "none";
    }
    onTermClick = (e) => {
        e.persist();
        let target = e.target;
        if ([...(target.classList)].includes("occupied")) {
            return this.props.info("This termin is occupied");
        }
        const {date} = target.dataset;
        const {room} = target.dataset;
        const {term} = target.dataset;
        const UTCShifted = new Date(date);
        UTCShifted.setUTCHours(UTCShifted.getUTCHours());
        this.setState({loading: term});
        reserve({
            room,
            term: date
        })
            .then(res => {
                let bookings = sessionStorage.getItem('bookings') || "";
                bookings += "," + term;
                sessionStorage.setItem('bookings', bookings);
                e.target.classList.add("blue");
                this.props.updateCalendar(res.data);
            })
            .catch(er => {
                console.log(er);
                if (er.response)
                    this.props.info(er.response.data)
                else
                    this.props.info(er.message)
            })
            .finally(() => {
                this.setState({loading: ""})
            });
    }

    render() {
        let days = [this.props.start.valueOf()];
        for (let i = 1; i < 7; i++) {
            days.push(days[i - 1] + 86400000);
        }
        days = days.map(day => day = (new Date(day)));
        let occupiedTerms = this.props.terms.map(date => (new Date(date.term)).valueOf() + "@" + date.room);
        let userTerms = sessionStorage.getItem('bookings') || [];
        return (
            <div>
                <table className="table table-striped table-bordered table-responsive-md">
                    <tbody>
                        <tr>
                            <th scope="col">Term</th>
                            <th scope="col">Room 1</th>
                            <th scope="col">Room 2</th>
                            <th scope="col">Room 3</th>
                        </tr>
                        {days.map(day => {
                            return (
                                <tr>
                                    <th scope="row">
                                        {day.toLocaleDateString()} <b>{day.getDay() === 0 ? weekday[6] : weekday[day.getDay() - 1]}</b>
                                    </th>
                                    {[1, 2, 3].map(room => {
                                        return (
                                            <td>
                                                <div className="custom-flex">
                                                    {[6, 10, 14, 18, 22].map(hour => {
                                                        let isSunday = day.getDay() === 0;
                                                        let currentDate = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour);
                                                        let currentTerm = currentDate.valueOf() + "@" + room;
                                                        let isOccupied = occupiedTerms.includes(currentTerm) ? true : false;
                                                        let isSelf = userTerms.includes(currentTerm) ? "blue" : "red";
                                                        let isPast = currentDate <= Date.now();
                                                        let additionalClass = ((isSunday || isOccupied || isPast) ? "occupied " + isSelf : "free" + (isMobile ? "" : " hooverable"));
                                                        if (this.state.loading === currentTerm)
                                                            return <Loader/>
                                                        return (
                                                            <div className={"hour " + additionalClass}
                                                                data-date={currentDate}
                                                                data-room={room}
                                                                data-term={currentTerm}
                                                                onMouseEnter={this.onTermEnter}
                                                                onMouseLeave={this.onTermLeave}
                                                                onMouseMove={this.onTermMove}
                                                                onClick={this.onTermClick}>
                                                                {hour}:00
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div ref={this.hoover} className="hoover"></div>
            </div>
        );
    }
}

export default TableComponent;
