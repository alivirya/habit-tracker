import { Mode, ModeProperties } from "../../Util/chromeUtil";
import React, { ReactElement } from "react";

import { DateContainer } from "./DateContainer";
import { GoalContainer } from "./GoalContainer";
import { StartNewModal } from "../Modals/StartNewModal";
import { Trackers } from "../HabitComponents/Trackers";
import { UpdateHabitProps } from "../../Types/Habit";

export interface CenterContainerProps extends UpdateHabitProps {
    mode: ModeProperties;
}

export const CenterContainer = ({
    habits,
    setHabits,
    mode: modeProperties,
}: CenterContainerProps): ReactElement => {
    return (
        <div className="habitContainer">
            {modeProperties.mode === Mode.Time ? (
                <DateContainer />
            ) : (
                <GoalContainer goal={modeProperties.goal} />
            )}
            <StartNewModal habits={habits} setHabits={setHabits} />
            <Trackers habits={habits} setHabits={setHabits} />
        </div>
    );
};
