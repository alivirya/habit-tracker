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

export interface LengthOfTime {
    years: number;
    months: number;
    days: number;
}

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

export const lengthOfHabit = (
    startOfWeek: DateTime,
    startDate: DateTime,
    weeklyCount: number
): LengthOfTime => {
    if (startDate >= startOfWeek) {
        return {
            years: 0,
            months: 0,
            days: weeklyCount,
        };
    }
    const timeDoingHabit = startOfWeek.plus({ days: weeklyCount });
    const lengthOfTime = timeDoingHabit.diff(startDate, [
        "years",
        "months",
        "days",
    ]);
    return lengthOfTime;
};

export const getDaysSinceText = (
    habitStartDate: string,
    weeklyCount: number
): string => {
    const today = getCurrentDateOnly();
    const startOfWeek = getStartOfWeek(today);
    const startDate = DateTime.fromISO(habitStartDate);

    const { years, months, days } = lengthOfHabit(
        startOfWeek,
        startDate,
        weeklyCount
    );
    const yearsText = years > 0 ? `${years} year${isPlural(years)}` : "";
    const monthsText = months > 0 ? `${months} month${isPlural(months)}` : "";
    const daysText = `${days} day${isPlural(days)}`;

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

const isPlural = (days: number) => {
    return days === 1 ? "" : "s";
};
