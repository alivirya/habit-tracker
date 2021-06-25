import { HabitProperties, UpdateHabitProps } from "../Types/Habit";
import React, { ReactElement, useState } from "react";

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

    const onCheckboxClicked = () => {
        setIsChecked(!isChecked);
        setHabits(updateHabitLength(name, habits, !isChecked, day));
        setCheckboxActive(name, day, !isChecked);
    };

    return (
        <button className="cellContainer" onClick={onCheckboxClicked}>
            <label className="checkboxContainer">
                <input
                    type="checkbox"
                    name={day}
                    className={`${name}dailyCheckBox`}
                    id={`${name}${day}CheckBox`}
                    aria-label={day}
                    onClick={onCheckboxClicked}
                />
                <span className="customCheckbox" />
            </label>
        </button>
    );
};

export const getHabit = (
    name: string,
    habits: HabitProperties[]
): HabitProperties | undefined => {
    return habits.find((h) => h.name === name);
};

const updateHabitLength = (
    habitName: string,
    habits: HabitProperties[],
    isChecked: boolean,
    day: string
): HabitProperties[] => {
    return habits.map((h) => {
        if (h.name === habitName) {
            return {
                name: h.name,
                startDate: h.startDate,
                weeklyTracker: {
                    ...h.weeklyTracker,
                    [day]: isChecked,
                },
            };
        }
        return h;
    });
};

const setCheckboxActive = (name: string, day: string, active: boolean) => {
    const dayCheckbox = document.getElementById(
        `${name}${day}CheckBox`
    ) as HTMLInputElement;
    dayCheckbox.checked = active;
};
