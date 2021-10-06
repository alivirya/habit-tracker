import "./style.css";
import "@fontsource/lora";

import { Mode, ModeProperties, seedDataFromChrome } from "./Util/chromeUtil";
import React, { ReactElement, useEffect, useState } from "react";

import { BackgroundModal } from "./Components/Modals/BackgroundModal";
import { Callout } from "./Components/CalloutComponent/Callout";
import { CenterContainer } from "./Components/OtherComponents/CenterContainer";
import { HabitProperties } from "./Types/Habit";
import { IconButton } from "./Components/OtherComponents/IconButton";
import { render } from "react-dom";

const App = (): ReactElement => {
    const [habits, setHabits] = useState<HabitProperties[]>([]);
    const [background, setBackground] = useState("");
    const [mode, setMode] = useState<ModeProperties>({
        mode: Mode.Time,
        goal: "",
    });

    useEffect(() => {
        seedDataFromChrome(setHabits, setBackground, setMode);
    }, []);

    useEffect(() => {
        chrome.storage.local.set({ habits });
    }, [habits]);

    useEffect(() => {
        chrome.storage.local.set({ background });
    }, [background]);

    useEffect(() => {
        console.log(mode);
        chrome.storage.local.set({ mode });
    }, [mode]);

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
                <CenterContainer
                    habits={habits}
                    setHabits={setHabits}
                    mode={mode}
                />
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
