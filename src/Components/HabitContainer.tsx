import React, { ReactElement, useEffect, useState } from "react";

import { StartNew } from "./StartNew";
import { Tracker } from "./Tracker";

export const HabitContainer = (): ReactElement => {
    const [habitsToTrack, setHabitsToTrack] = useState<string[]>([]);

    // hmmm this currently doesn't update dynamically - will need to change so it does
    useEffect(() => {
        chrome.storage.local.get("habits", ({ habits }: any) => {
            console.log(habits);
            if (Object.keys(habits).length === 0) return;
            setHabitsToTrack(habits);
        });
    }, []);

    return (
        <div className="habitContainer">
            <StartNew
                habits={habitsToTrack}
                setHabitsToTrack={setHabitsToTrack}
            />
            {habitsToTrack.map((habit) => {
                return <Tracker habit={habit} key={habit} />;
            })}
        </div>
    );
};
