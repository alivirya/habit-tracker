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
    const [isChecked, setIsChecked] = useState(false);

    const onCheckboxClicked = () => {
        setIsChecked(!isChecked);
        setHabits(updateHabitLength(name, habits, !isChecked));
    };
    return (
        <div className="cellContainer">
            <input
                type="checkbox"
                name={day}
                className="dailyCheckBox"
                aria-label={day}
                onClick={onCheckboxClicked}
            />
        </div>
    );
};

const updateHabitLength = (
    habitName: string,
    habits: HabitProperties[],
    isChecked: boolean
): HabitProperties[] => {
    const value = isChecked ? 1 : -1;
    return habits.map((h) => {
        if (h.name === habitName) {
            return {
                name: h.name,
                startDate: h.startDate,
                weeklyCount: h.weeklyCount + value,
            };
        }
        return h;
    });
};
