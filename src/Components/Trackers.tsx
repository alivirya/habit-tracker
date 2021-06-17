import React, { Fragment, ReactElement } from "react";

import { HabitProperties } from "../Types/Habit";
import { SingleTracker } from "./SingleTrackerProps";

export interface TrackersProps {
    habits: HabitProperties[];
}
export const Trackers = ({ habits }: TrackersProps): ReactElement => {
    return (
        <Fragment>
            {habits.map((habit: HabitProperties) => {
                return <SingleTracker habit={habit.name} key={habit.name} />;
            })}
        </Fragment>
    );
};
