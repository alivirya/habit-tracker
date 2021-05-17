import "./style.css";

import { CalloutComponent } from "./Components/CalloutComponent";
import React from "react";
import { render } from "react-dom";

const currentChallenge = {
    topic: "Monthly Challenge",
    description: "Intermittent fasting 18:6",
};

const App = () => {
    return (
        <React.StrictMode>
            <div className="app">
                <CalloutComponent
                    topic={currentChallenge.topic}
                    description={currentChallenge.description}
                />
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
