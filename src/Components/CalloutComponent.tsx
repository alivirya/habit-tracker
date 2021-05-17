import React from "react";
import { Icon } from "../Icons/Icon";
import { IconComponent } from "./IconComponent";

export interface CalloutComponentProps {
    icon?: Icon;
    topic: string;
    description: string;
}

export const CalloutComponent = (props: CalloutComponentProps): JSX.Element => {
    const { icon, topic, description } = props;
    return (
        <div className="callout">
            {icon && <IconComponent icon={icon} />}
            <div className="topic">{topic}</div>
            <div className="description">{description}</div>
        </div>
    );
};
