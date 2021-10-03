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
    const [background, setBackground] = useState("");

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        chrome.storage.local.set({ habits });
    }, [habits]);

    useEffect(() => {
        chrome.storage.local.set({ background });
    }, [background]);

    const openBackgroundModal = () => {
        const backgroundModal = document.getElementById("backgroundModal");
        if (!backgroundModal) return;
        backgroundModal.style.display = "block";
    };

    return (
        <React.StrictMode>
            <img id="background" alt="background" src={background} />
            <div className="app">
                {habits.length !== 0 && <Callout habits={habits} />}
                <CenterContainer habits={habits} setHabits={setHabits} />
                <IconButton
                    onClick={openBackgroundModal}
                    className="backgroundButton"
                />
                <BackgroundModal setBackground={setBackground} />
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
