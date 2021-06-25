import "./style.css";
import "@fontsource/lora";

import React, { ReactElement, useEffect, useState } from "react";

import { Callout } from "./Components/Callout";
import { HabitContainer } from "./Components/HabitContainer";
import { HabitProperties } from "./Types/Habit";
import { render } from "react-dom";

const App = (): ReactElement => {
    const [habits, setHabits] = useState<HabitProperties[]>([]);

    useEffect(() => {
        chrome.storage.local.get(
            "habits",
            ({ habits }: { [key: string]: HabitProperties[] }) => {
                setHabits(habits);
            }
        );
    }, []);

    useEffect(() => {
        chrome.storage.local.set({ habits: habits });
    }, [habits]);

    return (
        <React.StrictMode>
            <div className="app">
                <Callout habits={habits} />
                <HabitContainer habits={habits} setHabits={setHabits} />
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
