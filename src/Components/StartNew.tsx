import React, { FormEvent, ReactElement, useState } from "react";

import { HabitProperties } from "../Types/Habit";

export interface StartNewProps {
    habits: HabitProperties[];
    setHabitsToTrack: any;
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

const StartNewModal = ({
    habits,
    setHabitsToTrack,
}: StartNewProps): ReactElement => {
    const [newHabitValue, setNewHabitValue] = useState("");

    const createNewTracker = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        const newHabit = {
            name: newHabitValue,
            startDate: Date.now(),
            length: 0,
        };
        setHabitsToTrack([...habits, newHabit]);
        close();
    };

    const close = () => {
        const startNewModal = document.getElementById("startNewModal");
        if (startNewModal === null) return;
        startNewModal.style.display = "none";
    };

    return (
        <div className="startNewModal" id="startNewModal">
            <div className="startNewModalContent">
                <form onSubmit={createNewTracker}>
                    <label>
                        Habit:
                        <input
                            type="text"
                            name="newHabitName"
                            value={newHabitValue}
                            onChange={(event) => {
                                setNewHabitValue(event.target.value);
                            }}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button className="close" onClick={close}>
                    &times;
                </button>
            </div>
        </div>
    );
};
