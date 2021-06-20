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
    return DateTime.now().toFormat("yyyy'-'MM'-'dd");
};

export const getCurrentDayText = (): string => {
    return DateTime.now().toFormat("'Today is' DDDD");
};

export const getStartOfWeek = (): DateTime => {
    // TODO: This is very hacky - should change this
    const today = DateTime.fromISO(getCurrentFormattedDate());
    const day = today.weekday;
    const dayOffsetSinceMonday = day !== 1 ? day - 1 : 0;

    return today.minus({ days: dayOffsetSinceMonday });
};

export const getTotalCount = (weeklyCount: number): DateTime => {
    const currentBeforeWeek = getStartOfWeek();

    return currentBeforeWeek.plus({ days: weeklyCount });
};

export const getDaysSinceText = (
    startDate: string,
    weeklyCount: number
): string => {
    //TODO: need to fix this for when it is the current week
    const current = getTotalCount(weeklyCount);
    const start = DateTime.fromISO(startDate);
    const { years, months, weeks, days } = current.diff(start, [
        "years",
        "months",
        "weeks",
        "days",
    ]);

    const yearsText = years > 0 ? `${years} years, ` : "";
    const monthsText = months > 0 ? `${months} months, ` : "";
    const weeksText = weeks > 0 ? `${weeks} weeks, ` : "";
    const daysText = `${days} days`;

    return `${yearsText}${monthsText}${weeksText}${daysText}`;
};
