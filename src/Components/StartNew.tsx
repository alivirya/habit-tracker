import React, { ReactElement, useState } from "react";

export interface StartNewProps {
    habits: any;
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
                Start new habit
            </button>
        </div>
    );
};

const StartNewModal = ({
    habits,
    setHabitsToTrack,
}: StartNewProps): ReactElement => {
    const [newHabitValue, setNewHabitValue] = useState("");

    const createNewTracker = (event: any) => {
        chrome.storage.local.set({ habits: [...habits, newHabitValue] });
        event.preventDefault();
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
