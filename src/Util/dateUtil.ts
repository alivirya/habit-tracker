import { DateTime } from "luxon";
import { Days } from "../Types/Habit";

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
    return DateTime.now().toISODate();
};

export const getCurrentDateOnly = (): DateTime => {
    return DateTime.fromISO(DateTime.now().toISODate());
};

export const getCurrentTimeText = (): string => {
    return DateTime.now().toFormat("h':'mm':'ssa").toLowerCase();
};

export const getCurrentDayText = (): string => {
    return DateTime.now().toFormat("DDDD");
};

export const getStartOfWeek = (date: DateTime): DateTime => {
    const day = date.weekday;

    return date.minus({ days: day });
};

export const getDaysSinceText = (
    startDate: string,
    weeklyCount: number
): string => {
    const today = getCurrentDateOnly();
    let startOfWeek = getStartOfWeek(today);
    const start = DateTime.fromISO(startDate);
    if (startOfWeek > start) {
        startOfWeek = startOfWeek.plus({ days: weeklyCount });
    }
    const diff = startOfWeek.diff(start, ["years", "months", "days"]);
    const { years, months } = diff;
    let { days } = diff;
    if (days <= 0) {
        days = weeklyCount;
    }

    const yearsText = years > 0 ? `${years} years` : "";
    const monthsText = months > 0 ? `${months} months` : "";
    const daysText = `${days} days`;

    return `${yearsText} ${monthsText} ${daysText}`;
};

export const countDays = (days: Days): number => {
    let dayCount = 0;
    const dayValues = Object.values(days);
    dayValues.forEach((d: boolean) => {
        if (d) dayCount++;
    });

    return dayCount;
};
