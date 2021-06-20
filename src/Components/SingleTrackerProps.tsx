import React, { ReactElement } from "react";

import { DayCheckBox } from "./DayCheckBox";
import { DaysOfTheWeek } from "../Util/dateUtil";
import { UpdateHabitProps } from "../Types/Habit";

export interface SingleTrackerProps extends UpdateHabitProps {
    name: string;
}

export const SingleTracker = ({
    name,
    habits,
    setHabits,
}: SingleTrackerProps): ReactElement => {
    return (
        <div className="row">
            <div className="cellContainer firstColumn">{name}</div>
            {DaysOfTheWeek.map((day) => {
                return (
                    <DayCheckBox
                        name={name}
                        habits={habits}
                        setHabits={setHabits}
                        day={day}
                        key={day}
                    />
                );
            })}
        </div>
    );
};
