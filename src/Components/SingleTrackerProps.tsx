import React, { ReactElement } from "react";

import { DayCheckBox } from "./DayCheckBox";

export interface SingleTrackerProps {
    habit: string;
}

export const SingleTracker = ({ habit }: SingleTrackerProps): ReactElement => {
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
