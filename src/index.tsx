import "./style.css";

import React, { Fragment } from "react";

import { render } from "react-dom";

const App = () => {
    return (
        <React.StrictMode>
            <div className="app">
                <Tracker />
            </div>
        </React.StrictMode>
    );
};

const Tracker = () => {
    return (
        <div className="tracker">
            <DayCheckBox day="Monday" />
            <DayCheckBox day="Tuesday" />
            <DayCheckBox day="Wednesday" />
            <DayCheckBox day="Thursday" />
            <DayCheckBox day="Friday" />
            <DayCheckBox day="Saturday" />
            <DayCheckBox day="Sunday" />
        </div>
    );
};

export interface DayCheckBoxProps {
    day: string;
}

const DayCheckBox = ({ day }: DayCheckBoxProps) => {
    return (
        <div className="dailyCheckBoxContainer">
            <label htmlFor={day} className="dailyCheckboxLabel">
                {day}
            </label>
            <input type="checkbox" name={day} className="dailyCheckBox" />
        </div>
    );
};

render(<App />, document.getElementById("root"));
