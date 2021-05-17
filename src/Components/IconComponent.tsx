import React from "react";
import { Icon } from "../Icons/Icon";

export interface IconProps {
    icon: Icon;
}

export const IconComponent = (props: IconProps): JSX.Element => {
    const { width, height, path } = props.icon;
    return (
        <svg
            role="presentation"
            width={width}
            height={height}
            focusable="false"
        >
            <path d={path} />
        </svg>
    );
};
