import React, { ReactElement, useRef } from "react";

import { updateBackground } from "../../Util/fileUtil";

export interface BackgroundModalProps {
    setBackground: (background: string) => void;
}

export const BackgroundModal = ({
    setBackground,
}: BackgroundModalProps): ReactElement => {
    const dragArea = useRef<HTMLDivElement>(null);

    const close = () => {
        const backgroundModal = document.getElementById("backgroundModal");
        if (!backgroundModal) return;
        backgroundModal.style.display = "none";
    };

    const handleDroppedFiles = (event: React.DragEvent) => {
        event.preventDefault();
        if (!dragArea.current) return;
        dragArea.current.removeAttribute("dragged");
        dragArea.current.innerText = "Upload images here";
        updateBackground(setBackground, event.dataTransfer.files);
    };

    const handleDraggedFiles = (event: React.DragEvent) => {
        event.preventDefault();
    };

    const handleDragEnter = (event: React.DragEvent) => {
        event.preventDefault();
        if (!dragArea.current) return;
        dragArea.current.setAttribute("dragged", "true");
        dragArea.current.innerText = "Drop";
    };

    const handleDragLeave = (event: React.DragEvent) => {
        event.preventDefault();
        if (!dragArea.current) return;
        dragArea.current.removeAttribute("dragged");
        dragArea.current.innerText = "Upload files";
    };

    return (
        <div className="modal" id="backgroundModal">
            <div className="modalContent backgroundModalContent">
                <div className="modalHeader">
                    <h2>Background</h2>
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </div>
                <div
                    className="dragDropBackground"
                    id="dragArea"
                    ref={dragArea}
                    onDrop={handleDroppedFiles}
                    onDragOver={handleDraggedFiles}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                >
                    Upload images here
                </div>
            </div>
        </div>
    );
};
