import React, { ReactElement } from "react";

export const BackgroundModal = (): ReactElement => {
    const close = () => {
        const backgroundModal = document.getElementById("backgroundModal");
        if (!backgroundModal) return;
        backgroundModal.style.display = "none";
    };

    return (
        <div className="modal" id="backgroundModal">
            <div className="modalContent">
                <div className="modalHeader">
                    Test Content
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};
