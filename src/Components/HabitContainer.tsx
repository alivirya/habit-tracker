import React, { ReactElement, useState } from "react";

import { StartNew } from "./StartNew";
import { Tracker } from "./Tracker";

export const HabitContainer = (): ReactElement => {
    const [habitsToTrack, setHabitsToTrack] = useState<string[]>([]);

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
