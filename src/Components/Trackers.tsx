import { HabitProperties, UpdateHabitProps } from "../Types/Habit";
import React, { ReactElement } from "react";

import { DaysOfTheWeek } from "../Util/days";
import { SingleTracker } from "./SingleTrackerProps";

export const Trackers = ({
    habits,
    setHabits,
}: UpdateHabitProps): ReactElement => {
    return (
        <div>
            {habits.length === 0 || <HeaderRow />}
            {habits.map((habit: HabitProperties) => {
                return (
                    <SingleTracker
                        name={habit.name}
                        habits={habits}
                        setHabits={setHabits}
                        key={habit.name}
                    />
                );
            })}
        </div>
    );
};

const HeaderRow = (): ReactElement => {
    return (
        <div className="row">
            <div className="cellContainer firstColumn">Name</div>
            {DaysOfTheWeek.map((day) => {
                return (
                    <div className="cellContainer" key={day}>
                        {day}
                    </div>
                );
            })}
        </div>
    );
};
