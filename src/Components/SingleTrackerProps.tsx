import React, { ReactElement } from "react";

import { DayCheckBox } from "./DayCheckBox";
import { DaysOfTheWeek } from "../Util/days";

export interface SingleTrackerProps {
    habit: string;
}

export const SingleTracker = ({ habit }: SingleTrackerProps): ReactElement => {
    return (
        <div className="tracker row">
            {DaysOfTheWeek.map((day) => {
                return <DayCheckBox day={day} key={day} />;
            })}
        </div>
    );
};
