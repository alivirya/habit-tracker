import { DayCheckBox, getHabit } from "./DayCheckBox";
import {
    DaysOfTheWeek,
    getCurrentDateOnly,
    getStartOfWeek,
} from "../Util/dateUtil";
import { HabitAction, HabitProperties, UpdateHabitProps } from "../Types/Habit";
import React, { MouseEvent, ReactElement, useEffect } from "react";

import { HabitModal } from "./HabitModal";

export interface SingleTrackerProps extends UpdateHabitProps {
    name: string;
}

export const SingleTracker = ({
    name,
    habits,
    setHabits,
}: SingleTrackerProps): ReactElement => {
    const habit = getHabit(name, habits);

    const deleteHabit = (event: MouseEvent) => {
        event.preventDefault();
        setHabits(habits.filter((h) => h.name !== name));
    };

    const openModal = () => {
        const modal = document.getElementById(`Update${name}Modal`);
        if (modal === null) return;
        modal.style.display = "block";
    };

    const closeModal = () => {
        const modal = document.getElementById(`Update${name}Modal`);
        if (modal === null) return;
        modal.style.display = "none";
    };

    const updateHabitInformation = (
        newHabitName: string,
        newHabitStartDate: string
    ) => {
        const updatedHabits = habits.map((h) => {
            if (h.name === name) {
                return {
                    name: newHabitName,
                    startDate: newHabitStartDate,
                    weeklyTracker: h.weeklyTracker,
                };
            }
            return h;
        });
        setHabits(updatedHabits);
        closeModal();
    };

    useEffect(() => {
        const startOfWeek = getStartOfWeek(getCurrentDateOnly());
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
            <HabitModal
                onHabitEdit={updateHabitInformation}
                close={closeModal}
                action={HabitAction.UPDATE}
                currentName={name}
                currentStartDate={habit?.startDate}
                deleteHabit={deleteHabit}
            />
            <button className="cellContainer firstColumn" onClick={openModal}>
                {name}
            </button>
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

const setCheckboxes = (name: string, habit?: HabitProperties) => {
    if (!habit) return;
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

// TODO: this needs to be moved to a habit util
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
