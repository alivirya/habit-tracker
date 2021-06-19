import React, { Fragment, ReactElement } from "react";

import { DaysOfTheWeek } from "../Util/days";
import { HabitProperties } from "../Types/Habit";
import { SingleTracker } from "./SingleTrackerProps";

export interface TrackersProps {
    habits: HabitProperties[];
}
export const Trackers = ({ habits }: TrackersProps): ReactElement => {
    return (
        <div className="trackers">
            <div className="nameColumn">
                <div className="row">Name</div>
                {habits.map((habit: HabitProperties) => {
                    return <HabitName name={habit.name} key={habit.name} />;
                })}
            </div>
            <div className="habitTrackers">
                <Week />
                {habits.map((habit: HabitProperties) => {
                    return (
                        <SingleTracker habit={habit.name} key={habit.name} />
                    );
                })}
            </div>
        </div>
    );
};

export interface HabitNameProps {
    name: string;
}

export const HabitName = ({ name }: HabitNameProps): ReactElement => {
    return <div className="row">{name}</div>;
};

export const Week = (): ReactElement => {
    return (
        <div className="week row">
            {DaysOfTheWeek.map((day) => {
                return <DayOfTheWeek day={day} key={day} />;
            })}
        </div>
    );
};

export interface DaysOfTheWeekProps {
    day: string;
}

export const DayOfTheWeek = ({ day }: DaysOfTheWeekProps): ReactElement => {
    return <div className="dailyBoxContainer">{day}</div>;
};
