import React, { Fragment, ReactElement } from "react";

import { HabitProperties } from "../Types/Habit";

export interface CalloutProps {
    habits: HabitProperties[];
}

export const Callout = ({ habits }: CalloutProps): ReactElement => {
    return (
        <div className="callout">
            {habits.map((h) => {
                return <GJ name={h.name} length={h.length} key={h.name} />;
            })}
        </div>
    );
};

interface GJProps {
    name: string;
    length: number;
}

const GJ = ({ name, length }: GJProps): ReactElement => {
    return (
        <Fragment>
            You have been doing {name} for {length} days!
        </Fragment>
    );
};
