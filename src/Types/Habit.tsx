export interface HabitProperties {
    name: string;
    weeklyCount: number;
    startDate: Date;
}

export interface UpdateHabitProps {
    habits: HabitProperties[];
    setHabits: (h: HabitProperties[]) => void;
}
