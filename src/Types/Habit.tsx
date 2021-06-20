export interface HabitProperties {
    name: string;
    length: number;
    startDate: Date;
}

export interface UpdateHabitProps {
    habits: HabitProperties[];
    setHabits: (h: HabitProperties[]) => void;
}
