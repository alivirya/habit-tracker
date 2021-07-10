import {
    HabitAction,
    HabitProperties,
    UpdateHabitProps,
} from "../../Types/Habit";
import React, { ReactElement } from "react";

import { HabitModal } from "./HabitModal";

export const StartNewModal = ({
    habits,
    setHabits,
}: UpdateHabitProps): ReactElement => {
    const openModal = () => {
        const modal = document.getElementById("CreateModal");
        if (!modal) return;
        modal.style.display = "block";
    };

    const closeModal = () => {
        const modal = document.getElementById("CreateModal");
        if (!modal) return;
        modal.style.display = "none";
    };

    const createNewTracker = (habitName: string, habitStartDate: string) => {
        const newHabit: HabitProperties = {
            name: habitName,
            weeklyTracker: {
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
                Sunday: false,
            },
            startDate: habitStartDate,
        };
        setHabits([...habits, newHabit]);
        closeModal();
    };
    return (
        <div>
            <HabitModal
                onHabitEdit={createNewTracker}
                close={closeModal}
                action={HabitAction.CREATE}
            />
            <button className="startButton" onClick={openModal}>
                + Start New Habit
            </button>
        </div>
    );
};
