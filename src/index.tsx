import "./style.css";
import "@fontsource/lora";

import React, { ReactElement, useEffect, useState } from "react";

import { BackgroundModal } from "./Components/BackgroundModal";
import { Callout } from "./Components/Callout";
import { HabitContainer } from "./Components/HabitContainer";
import { HabitProperties } from "./Types/Habit";
import { IconButton } from "./Components/IconButton";
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

    const openBackgroundModal = () => {
        const backgroundModal = document.getElementById("backgroundModal");
        if (!backgroundModal) return;
        backgroundModal.style.display = "block";
    };

    return (
        <React.StrictMode>
            <div className="app">
                {habits.length !== 0 && <Callout habits={habits} />}
                <HabitContainer habits={habits} setHabits={setHabits} />
                <IconButton
                    onClick={openBackgroundModal}
                    className="backgroundButton"
                />
                <BackgroundModal />
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
