import "./style.css";
import "@fontsource/lora";

import React, { ReactElement } from "react";

import { HabitContainer } from "./Components/HabitContainer";
import { render } from "react-dom";

const App = (): ReactElement => {
    return (
        <React.StrictMode>
            <div className="app">
                <HabitContainer />
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
