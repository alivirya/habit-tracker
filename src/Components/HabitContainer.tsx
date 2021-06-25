import { HabitProperties, UpdateHabitProps } from "../Types/Habit";
import React, { ReactElement, useEffect, useState } from "react";

import { DateContainer } from "./DateContainer";
import { StartNew } from "./StartNew";
import { Trackers } from "./Trackers";

export const HabitContainer = ({
    habits,
    setHabits,
}: UpdateHabitProps): ReactElement => {
    return (
        <div className="habitContainer">
            <DateContainer />
            <StartNew habits={habits} setHabits={setHabits} />
            <Trackers habits={habits} setHabits={setHabits} />
        </div>
    );
};
