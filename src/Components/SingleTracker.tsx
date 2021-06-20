import { DayCheckBox, getHabit } from "./DayCheckBox";
import { DaysOfTheWeek, getStartOfWeek } from "../Util/dateUtil";
import { HabitProperties, UpdateHabitProps } from "../Types/Habit";
import React, { ReactElement, useEffect } from "react";

export interface SingleTrackerProps extends UpdateHabitProps {
    name: string;
}

export const SingleTracker = ({
    name,
    habits,
    setHabits,
}: SingleTrackerProps): ReactElement => {
    const habit = getHabit(name, habits);

    useEffect(() => {
        const startOfWeek = getStartOfWeek();
        chrome.storage.local.get(
            "currentWeek",
            ({ currentWeek }: { [key: string]: string }) => {
                const startOfWeekInISO = startOfWeek.toISO();
                if (currentWeek === startOfWeekInISO) {
                    setCheckboxes(name, habit);
                    return;
                }
                refreshCheckboxes(name, startOfWeekInISO);
                setHabits(refreshHabitWeek(name, habits));
            }
        );
    }, []);

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

const setCheckboxes = (name: string, habit: HabitProperties) => {
    const days = Object.keys(habit.weeklyTracker);
    days.forEach((day) => {
        const dayCheckbox = document.getElementById(
            `${name}${day}CheckBox`
        ) as HTMLInputElement;
        dayCheckbox.checked = habit.weeklyTracker[day];
    });
};

const refreshCheckboxes = (name: string, startOfWeek: string) => {
    chrome.storage.local.set({ currentWeek: startOfWeek });
    const dailyCheckBoxes = document.getElementsByClassName(
        `${name}dailyCheckBox`
    ) as HTMLCollectionOf<HTMLInputElement>;
    for (const checkbox of dailyCheckBoxes) {
        checkbox.checked = false;
    }
};

const refreshHabitWeek = (
    habitName: string,
    habits: HabitProperties[]
): HabitProperties[] => {
    return habits.map((h) => {
        if (h.name === habitName) {
            return {
                name: h.name,
                startDate: h.startDate,
                weeklyTracker: {
                    Monday: false,
                    Tuesday: false,
                    Wednesday: false,
                    Thursday: false,
                    Friday: false,
                    Saturday: false,
                    Sunday: false,
                },
            };
        }
        return h;
    });
};
