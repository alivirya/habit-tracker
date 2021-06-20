import { DateTime } from "luxon";

export interface HabitProperties {
    name: string;
    weeklyCount: number;
    startDate: string;
}

export interface UpdateHabitProps {
    habits: HabitProperties[];
    setHabits: (h: HabitProperties[]) => void;
}
