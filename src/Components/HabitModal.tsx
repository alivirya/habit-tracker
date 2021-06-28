import React, { ReactElement, useState } from "react";

import { HabitAction } from "../Types/Habit";
import { getCurrentFormattedDate } from "../Util/dateUtil";

export interface HabitEditModalProps {
    action: HabitAction;
    onHabitEdit: (name: string, date: string) => void;
    close: () => void;
    currentName?: string;
    currentStartDate?: string;
}

export const HabitModal = ({
    action,
    onHabitEdit,
    close,
    currentName,
    currentStartDate,
}: HabitEditModalProps): ReactElement => {
    const [habitName, setHabitName] = useState(currentName || "");
    const [habitStartDate, setHabitStartDate] = useState(
        currentStartDate || getCurrentFormattedDate()
    );

    // Learnings - this caches, so the id needs to change for react to realize it nees to update
    return (
        <div className="modal" id={`${action}${currentName}Modal`}>
            <div className="modalContent">
                <div className="modalHeader">
                    <h1>New Habit</h1>
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onHabitEdit(habitName, habitStartDate);
                    }}
                >
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
