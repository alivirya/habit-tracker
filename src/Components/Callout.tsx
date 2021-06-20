import React, { ReactElement } from "react";

import { DateTime } from "luxon";
import { HabitProperties } from "../Types/Habit";
import { getDaysSinceText } from "../Util/dateUtil";

export interface CalloutProps {
    habits: HabitProperties[];
}

export const Callout = ({ habits }: CalloutProps): ReactElement => {
    return (
        <div className="callout">
            {habits.map((h) => {
                return (
                    <GJ
                        name={h.name}
                        length={h.weeklyCount}
                        startDate={h.startDate}
                        key={h.name}
                    />
                );
            })}
        </div>
    );
};

interface GJProps {
    name: string;
    length: number;
    startDate: string;
}

const GJ = ({ name, length, startDate }: GJProps): ReactElement => {
    const duration = getDaysSinceText(startDate, length);
    // make it so the emoji is configurable?

    return (
        <div className="dotdot">
            <span role="img" aria-label="">
                🎉
            </span>
            You have been <b>{name}</b> for {duration}!
        </div>
    );
};
