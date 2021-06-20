import { DateTime } from "luxon";

export const DaysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

export const getCurrentFormattedDate = (): string => {
    const today = new Date();
    const month =
        today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth();
    const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

    return `${today.getFullYear()}-${month}-${date}`;
};

export const getCurrentDayText = (): string => {
    return DateTime.now().toFormat("'Today is' DDDD");
};

export const getStartOfWeek = (): number => {
    const today = new Date();
    const day = today.getDay();
    const dayOffsetSinceMonday = day === 0 ? 6 : day - 1;

    return new Date().setDate(today.getDate() - dayOffsetSinceMonday);
};
