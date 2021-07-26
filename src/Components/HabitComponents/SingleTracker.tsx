import {
    DaysOfTheWeek,
    getCurrentDateOnly,
    getStartOfWeek,
} from "../../Util/dateUtil";
import {
    HabitAction,
    HabitProperties,
    UpdateHabitProps,
} from "../../Types/Habit";
import React, { MouseEvent, ReactElement, useEffect } from "react";
import { closeModal, openModal } from "../../Util/modalUtil";
import { getHabit, refreshHabits } from "../../Util/habitUtil";

import { DayCheckBox } from "./DayCheckBox";
import { HabitModal } from "../Modals/HabitModal";

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
        closeModal(`Update${name}Modal`);
    };

    useEffect(() => {
        const startOfCurrentWeek = getStartOfWeek(getCurrentDateOnly());
        chrome.storage.local.get(
            "currentWeek",
            ({ currentWeek }: { [key: string]: string }) => {
                const startOfWeekInISO = startOfCurrentWeek.toISODate();
                if (currentWeek === startOfWeekInISO) {
                    setCheckboxes(name, habit);
                    return;
                }
                setHabits(refreshHabits(habits));
                chrome.storage.local.set({ currentWeek: startOfWeekInISO });
            }
        );
    }, [habits]);

    return (
        <div className="row">
            <HabitModal
                onHabitEdit={updateHabitInformation}
                close={() => {
                    closeModal(`Update${name}Modal`);
                }}
                action={HabitAction.UPDATE}
                currentName={name}
                currentStartDate={habit?.startDate}
                deleteHabit={deleteHabit}
            />
            <button
                className="cellContainer firstColumn"
                onClick={() => {
                    openModal(`Update${name}Modal`);
                }}
            >
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
