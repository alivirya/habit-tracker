import React, { ReactElement } from "react";

import { HabitProperties } from "../Types/Habit";
import { IndividualCallout } from "./IndividualCallout";
import { countDays } from "../Util/dateUtil";

export interface CalloutProps {
    habits: HabitProperties[];
}

export const Callout = ({ habits }: CalloutProps): ReactElement => {
    return (
        <div className="callout">
            {habits.map((h) => {
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
