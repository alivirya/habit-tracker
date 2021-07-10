import React, { ReactElement } from "react";

import { DateContainer } from "../OtherComponents/DateContainer";
import { StartNewModal } from "../Modals/StartNewModal";
import { Trackers } from "./Trackers";
import { UpdateHabitProps } from "../../Types/Habit";

export const CenterContainer = ({
    habits,
    setHabits,
}: UpdateHabitProps): ReactElement => {
    return (
        <div className="habitContainer">
            <DateContainer />
            <StartNewModal habits={habits} setHabits={setHabits} />
            <Trackers habits={habits} setHabits={setHabits} />
        </div>
    );
};
