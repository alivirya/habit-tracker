import "./style.css";

import { MonthlyChallenge } from "./MonthlyChallenge";
import React from "react";
import { render } from "react-dom";

const App = () => {
    return (
        <React.StrictMode>
            <div className="app">
                <MonthlyChallenge />
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
