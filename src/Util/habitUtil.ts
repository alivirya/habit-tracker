import { HabitProperties } from "../Types/Habit";

export const refreshHabitWeek = (
    habitName: string,
    habits: HabitProperties[]
): HabitProperties[] => {
    return habits.map((h) => {
        if (h.name === habitName) {
            return {
                name: h.name,
                startDate: h.startDate,
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
