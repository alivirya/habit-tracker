import React, { ReactElement, useState } from "react";
import { getCurrentDayText, getCurrentTimeText } from "../Util/dateUtil";

export const DateContainer = (): ReactElement => {
    const [date, setDate] = useState(getCurrentTimeText());
    setInterval(() => {
        setDate(getCurrentTimeText());
    }, 1000);

    return (
        <div className="dateContainer">
            <div className="dateText">{date}</div>
            <div className="dateText">{getCurrentDayText()}</div>
        </div>
    );
};
