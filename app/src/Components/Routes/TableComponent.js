import React from 'react';

import { reserve } from '../../functions/axiosSetup'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../css/style.css';

const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.hoover = React.createRef();
    }

    onTermEnter = (e) => {
        e.target.style.border = "1px groove darkblue";
        e.target.style.backgroundColor = "darkgreen";
        e.target.style.fontWeight = "800";
        this.hoover.current.style.display = "block";
        const date = new Date(e.target.dataset.term);
        this.hoover.current.innerHTML = `<b>Free</b><br/>
                                        Day: ${date.toLocaleDateString()}<br/>
                                        At: ${date.toLocaleTimeString().substr(0, 5)}`;
    }
    onTermMove = (e) => {
        this.hoover.current.style.top = e.pageY - 60 + "px";
        this.hoover.current.style.left = e.pageX + 5 + "px";
    }
    onTermLeave = (e) => {
        e.target.style.border = "1px solid lightskyblue";
        e.target.style.backgroundColor = "#90ee90";
        e.target.style.fontWeight = "600";
        this.hoover.current.style.display = "none";
    }
    onTermClick = (e) => {
        const UTCShifted = new Date(e.target.dataset.term);
        UTCShifted.setUTCHours(UTCShifted.getUTCHours());
        console.log('UTCShifted :', UTCShifted);
        console.log('e.target.dataset.term :', e.target.dataset.term);
        reserve({
            room: e.target.dataset.room,
            term: e.target.dataset.term
        })
            .then(res => {
                //this.props.updateCalendar();
                this.props.info(res.data);
            })
            .catch(er => {
                console.log(er);
                if (er.response) {
                    this.props.info(er.response.data);
                }
                else {
                    this.props.info(er.message);
                }
            })
    }

    render() {
        let days = [this.props.start.valueOf()];
        for (let i = 1; i < 7; i++) {
            days.push(days[i - 1] + 86400000);
        }
        days = days.map(day => day = (new Date(day)));
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
                                                        return (
                                                            <div className="hour"
                                                                data-term={new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour)}
                                                                data-room={room}
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
const x = new Date();
x.setUTCHours()

export default TableComponent;