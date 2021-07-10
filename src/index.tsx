import "./style.css";
import "@fontsource/lora";

import React, { ReactElement, useEffect, useState } from "react";

import { BackgroundModal } from "./Components/Modals/BackgroundModal";
import { Callout } from "./Components/CalloutComponent/Callout";
import { CenterContainer } from "./Components/HabitComponents/CenterContainer";
import { HabitProperties } from "./Types/Habit";
import { IconButton } from "./Components/OtherComponents/IconButton";
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
                <CenterContainer habits={habits} setHabits={setHabits} />
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
