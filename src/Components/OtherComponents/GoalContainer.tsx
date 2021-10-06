import React, { ReactElement } from "react";

export interface GoalContainerProps {
    goal: string;
}

export const GoalContainer = ({ goal }: GoalContainerProps): ReactElement => {
    return <div className="textContainer">{goal}Test</div>;
};
