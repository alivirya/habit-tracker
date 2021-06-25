import React, { ReactElement } from "react";

import { getDaysSinceText } from "../Util/dateUtil";

export interface IndividualCalloutProps {
    name: string;
    length: number;
    startDate: string;
}

export const IndividualCallout = ({
    name,
    length,
    startDate,
}: IndividualCalloutProps): ReactElement => {
    const duration = getDaysSinceText(startDate, length);
    // make it so the emoji is configurable?

    return (
        <div className="habitCelebration">
            {/* <span role="img" aria-label="">
                🎉
            </span> */}
            <b>{name}</b>: {duration}
        </div>
    );
};
