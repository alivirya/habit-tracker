export interface Days {
    [day: string]: boolean;
    Monday: boolean;
    Tuesday: boolean;
    Wednesday: boolean;
    Thursday: boolean;
    Friday: boolean;
    Saturday: boolean;
    Sunday: boolean;
}

export interface HabitProperties {
    name: string;
    weeklyTracker: Days;
    startDate: string;
}

export interface UpdateHabitProps {
    habits: HabitProperties[];
    setHabits: (h: HabitProperties[]) => void;
}

export enum HabitAction {
    CREATE = "Create",
    UPDATE = "Update",
}
