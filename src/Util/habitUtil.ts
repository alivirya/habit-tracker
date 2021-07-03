import { HabitProperties } from "../Types/Habit";

export const refreshHabitWeek = (
    habitName: string,
    habits: HabitProperties[]
): HabitProperties[] => {
    return habits.map((h) => {
        if (h.name === habitName) {
            return {
                ...h,
                weeklyTracker: {
                    Monday: false,
                    Tuesday: false,
                    Wednesday: false,
                    Thursday: false,
                    Friday: false,
                    Saturday: false,
                    Sunday: false,
                },
            };
        }
        return h;
    });
};

export const getHabit = (
    name: string,
    habits: HabitProperties[]
): HabitProperties | undefined => {
    return habits.find((h) => h.name === name);
};

export const updateHabitLength = (
    habitName: string,
    habits: HabitProperties[],
    isChecked: boolean,
    day: string
): HabitProperties[] => {
    return habits.map((h) => {
        if (h.name === habitName) {
            return {
                ...h,
                weeklyTracker: {
                    ...h.weeklyTracker,
                    [day]: isChecked,
                },
            };
        }
        return h;
    });
};
