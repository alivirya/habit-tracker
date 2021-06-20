import React, { FormEvent, ReactElement, useState } from "react";

import { HabitProperties } from "../Types/Habit";

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

const StartNewModal = ({ habits, setHabits }: StartNewProps): ReactElement => {
    const [newHabit, setNewHabit] = useState("");

    const createNewTracker = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        const habit = {
            name: newHabit,
            length: 0,
            startDate: new Date(),
        };
        setHabits([...habits, habit]);
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
                            value={newHabit}
                            onChange={(event) => {
                                setNewHabit(event.target.value);
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
