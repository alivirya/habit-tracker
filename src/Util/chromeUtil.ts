import { HabitProperties } from "../Types/Habit";

export const seedDataFromChrome = (
    setHabits: (h: HabitProperties[]) => void,
    setBackground: (background: string) => void,
    setMode: (mode: ModeProperties) => void
): void => {
    chrome.storage.local.get(
        "habits",
        ({ habits }: { [key: string]: HabitProperties[] }) => {
            setHabits(habits);
        }
    );
    chrome.storage.local.get(
        "background",
        ({ background }: { [key: string]: string }) => {
            setBackground(
                background ||
                    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            );
        }
    );
    chrome.storage.local.get(
        "mode",
        ({ mode }: { [key: string]: ModeProperties }) => {
            setMode(mode);
        }
    );
};

export interface ModeProperties {
    mode: Mode;
    goal: string;
}

export enum Mode {
    Time,
    Goal,
}
