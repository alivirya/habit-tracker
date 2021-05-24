import "./style.css";

import { CurrentMedia } from "./CurrentMedia";
import React from "react";
import { render } from "react-dom";

const App = () => {
    return (
        <React.StrictMode>
            <div className="app">
                <CurrentMedia />
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
