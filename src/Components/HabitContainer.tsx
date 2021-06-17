import React, { ReactElement, useEffect, useState } from "react";

import { HabitProperties } from "../Types/Habit";
import { StartNew } from "./StartNew";
import { Trackers } from "./Trackers";

export const HabitContainer = (): ReactElement => {
    const [habitsToTrack, setHabitsToTrack] = useState<HabitProperties[]>([]);

    useEffect(() => {
        chrome.storage.local.get(
            "habits",
            ({ habits }: { [key: string]: HabitProperties[] }) => {
                setHabitsToTrack(habits);
            }
        );
    }, []);

    useEffect(() => {
        chrome.storage.local.set({ habits: habitsToTrack });
    }, [habitsToTrack]);

    return (
        <div className="habitContainer">
            <StartNew
                habits={habitsToTrack}
                setHabitsToTrack={setHabitsToTrack}
            />
            <Trackers habits={habitsToTrack} />
        </div>
    );
};
