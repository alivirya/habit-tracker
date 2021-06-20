import React, { ReactElement } from "react";

import { HabitProperties } from "../Types/Habit";
import { StartNewModal } from "./StartNewModal";

export interface StartNewProps {
    habits: HabitProperties[];
    setHabits: (h: HabitProperties[]) => void;
}

export const StartNew = (props: StartNewProps): ReactElement => {
    const newHabit = () => {
        const startNewModal = document.getElementById("startNewModal");
        if (startNewModal === null) return;
        startNewModal.style.display = "block";
    };
    return (
        <div>
            <StartNewModal {...props} />
            <button className="startButton" onClick={newHabit}>
                + Start new habit
            </button>
        </div>
    );
};
