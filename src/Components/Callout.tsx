import React, { ReactElement, useState } from "react";

import { HabitProperties } from "../Types/Habit";
import { IndividualCallout } from "./IndividualCallout";
import { countDays } from "../Util/dateUtil";

export interface CalloutProps {
    habits: HabitProperties[];
}

export const Callout = ({ habits }: CalloutProps): ReactElement => {
    // TODO: NEED to fix this, right now it is adding multiple things to render? Not sure why - I am too sleepy right now
    // Also for some reason doesn't initiate with anything...... confused
    const [habitsToDisplay, setHabitsToDisplay] = useState(
        getThreeAtATime(habits, 0)
    );
    // const multiplesOfThree = Math.ceil(habits.length / 3) - 1;
    // let index = 1;
    // setInterval(() => {
    //     if (index > multiplesOfThree) index = 0;
    //     setHabitsToDisplay(getThreeAtATime(habits, index));
    //     index++;
    // }, 5000);

    return (
        <div className="callout">
            {habitsToDisplay.map((h) => {
                const weeklyCount = countDays(h.weeklyTracker);
                return (
                    <IndividualCallout
                        name={h.name}
                        length={weeklyCount}
                        startDate={h.startDate}
                        key={h.name}
                    />
                );
            })}
        </div>
    );
};

const getThreeAtATime = (habits: HabitProperties[], index: number) => {
    if (habits.length <= 3) return habits;
    const arrayIndex = index * 3;
    return habits.slice(arrayIndex, arrayIndex + 3);
};
