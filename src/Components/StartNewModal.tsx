import React, { FormEvent, ReactElement, useState } from "react";

import { HabitProperties } from "../Types/Habit";
import { StartNewProps } from "./StartNew";
import { getCurrentFormattedDate } from "../Util/dateUtil";

export const StartNewModal = ({
    habits,
    setHabits,
}: StartNewProps): ReactElement => {
    const [habitName, setHabitName] = useState("");
    const [habitStartDate, setHabitStartDate] = useState(
        getCurrentFormattedDate()
    );

    const createNewTracker = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
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
                <div className="modalHeader">
                    <h1>New Habit</h1>
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </div>
                <form onSubmit={createNewTracker}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={habitName}
                        onChange={(event) => {
                            setHabitName(event.target.value);
                        }}
                    />
                    <label htmlFor="date">Start Date</label>
                    <input
                        type="date"
                        name="date"
                        value={habitStartDate}
                        onChange={(event) => {
                            setHabitStartDate(event.target.value);
                        }}
                    />
                    <input type="submit" value="New" className="submitButton" />
                </form>
            </div>
        </div>
    );
};
