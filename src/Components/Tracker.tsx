import React, { Fragment, ReactElement } from "react";

import { DayCheckBox } from "./DayCheckBox";

export interface TrackersProps {
    habits: any;
}
export const Trackers = ({ habits }: TrackersProps): ReactElement => {
    return (
        <Fragment>
            {habits.forEach((element: any) => {
                <Tracker habit={element} />;
            })}
        </Fragment>
    );
};

export interface TrackerProps {
    habit: string;
}

export const Tracker = ({ habit }: TrackerProps): ReactElement => {
    return (
        <div className="tracker">
            <div className="habitToTrack">{habit}</div>
            <DayCheckBox day="Monday" />
            <DayCheckBox day="Tuesday" />
            <DayCheckBox day="Wednesday" />
            <DayCheckBox day="Thursday" />
            <DayCheckBox day="Friday" />
            <DayCheckBox day="Saturday" />
            <DayCheckBox day="Sunday" />
        </div>
    );
};
