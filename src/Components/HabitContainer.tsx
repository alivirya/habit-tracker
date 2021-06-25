import React, { ReactElement, useEffect, useState } from "react";

import { DateContainer } from "./DateContainer";
import { HabitProperties } from "../Types/Habit";
import { StartNew } from "./StartNew";
import { Trackers } from "./Trackers";
import { getCurrentDayText } from "../Util/dateUtil";

export const HabitContainer = (): ReactElement => {
    const [habits, setHabits] = useState<HabitProperties[]>([]);

    useEffect(() => {
        chrome.storage.local.get(
            "habits",
            ({ habits }: { [key: string]: HabitProperties[] }) => {
                setHabits(habits);
            }
        );
    }, []);

    useEffect(() => {
        chrome.storage.local.set({ habits: habits });
    }, [habits]);

    return (
        <div className="habitContainer">
            <DateContainer />
            <StartNew habits={habits} setHabits={setHabits} />
            <Trackers habits={habits} setHabits={setHabits} />
        </div>
    );
};
