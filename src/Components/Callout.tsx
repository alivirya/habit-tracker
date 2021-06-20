import React, { Fragment, ReactElement } from "react";

import { HabitProperties } from "../Types/Habit";

export interface CalloutProps {
    habits: HabitProperties[];
}

export const Callout = ({ habits }: CalloutProps): ReactElement => {
    return (
        <div className="callout">
            {habits.map((h) => {
                return <GJ name={h.name} length={h.weeklyCount} key={h.name} />;
            })}
        </div>
    );
};

interface GJProps {
    name: string;
    length: number;
}

const GJ = ({ name, length }: GJProps): ReactElement => {
    // make it so the emoji is configurable?
    return (
        <div className="dotdot">
            <span role="img" aria-label="">
                🎉
            </span>
            You have been <b>{name}</b> for <b>{length}</b> days!
        </div>
    );
};
