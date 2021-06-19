import React, { ReactElement } from "react";

export interface DayCheckBoxProps {
    day: string;
}

export const DayCheckBox = ({ day }: DayCheckBoxProps): ReactElement => {
    return (
        <div className="dailyBoxContainer">
            <input
                type="checkbox"
                name={day}
                className="dailyCheckBox"
                aria-label={day}
            />
        </div>
    );
};
