import React, { ReactElement } from "react";

export interface DayCheckBoxProps {
    day: string;
}

export const DayCheckBox = ({ day }: DayCheckBoxProps): ReactElement => {
    return (
        <div className="dailyCheckBoxContainer">
            <label htmlFor={day} className="dailyCheckboxLabel">
                {day}
            </label>
            <input type="checkbox" name={day} className="dailyCheckBox" />
        </div>
    );
};
