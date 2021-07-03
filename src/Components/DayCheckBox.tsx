import React, { ReactElement, useState } from "react";
import { getHabit, updateHabitLength } from "../Util/habitUtil";

import { UpdateHabitProps } from "../Types/Habit";

export interface DayCheckBoxProps extends UpdateHabitProps {
    name: string;
    day: string;
}
export const DayCheckBox = ({
    name,
    day,
    habits,
    setHabits,
}: DayCheckBoxProps): ReactElement => {
    const habit = getHabit(name, habits);
    const [isChecked, setIsChecked] = useState(
        habit && habit.weeklyTracker[day]
    );

    const setCheckboxActive = (name: string, day: string, active: boolean) => {
        const dayCheckbox = document.getElementById(
            `${name}${day}CheckBox`
        ) as HTMLInputElement;
        dayCheckbox.checked = active;
    };

    const onCheckboxClicked = () => {
        setIsChecked(!isChecked);
        setHabits(updateHabitLength(name, habits, !isChecked, day));
        setCheckboxActive(name, day, !isChecked);
    };

    return (
        <button className="cellContainer" onClick={onCheckboxClicked}>
            <label
                className="checkboxContainer"
                htmlFor={`${name}${day}CheckBox`}
            >
                <input
                    type="checkbox"
                    name={day}
                    className={`${name}dailyCheckBox`}
                    id={`${name}${day}CheckBox`}
                    aria-label={day}
                />
                <span className="customCheckbox" />
            </label>
        </button>
    );
};
