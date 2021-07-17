import React, { ReactElement } from "react";

import { WheelOfImages } from "../OtherComponents/WheelOfImages";

export const BackgroundModal = (): ReactElement => {
    const close = () => {
        const backgroundModal = document.getElementById("backgroundModal");
        if (!backgroundModal) return;
        backgroundModal.style.display = "none";
    };

    const handleDroppedFiles = (event: React.DragEvent) => {
        event.preventDefault();
        const fileList = event.dataTransfer.files;
        console.log(fileList);
        const dragArea = document.getElementById("dragArea"); // is there somewhere where i should use useRef
        if (dragArea === null) return;
        dragArea.removeAttribute("dragged");
        dragArea.innerText = "Upload images here";
        const background = document.getElementById(
            "background"
        ) as HTMLImageElement;
        if (background === null) return;
        background.src = URL.createObjectURL(fileList[0]);
    };

    const handleDraggedFiles = (event: React.DragEvent) => {
        event.preventDefault();
    };

    const handleDragEnter = (event: React.DragEvent) => {
        event.preventDefault();
        const dragArea = document.getElementById("dragArea"); // is there somewhere where i should use useRef
        if (dragArea === null) return;
        dragArea.setAttribute("dragged", "true");
        dragArea.innerText = "Drop";
    };

    const handleDragLeave = (event: React.DragEvent) => {
        event.preventDefault();
        const dragArea = document.getElementById("dragArea"); // is there somewhere where i should use useRef
        if (dragArea === null) return;
        dragArea.removeAttribute("dragged");
        dragArea.innerText = "Upload files";
    };

    return (
        <div className="modal" id="backgroundModal">
            <div className="modalContent backgroundModal">
                <div className="modalHeader">
                    <h2>Background</h2>
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </div>
                <div
                    className="dragDropBackground"
                    id="dragArea"
                    onDrop={handleDroppedFiles}
                    onDragOver={handleDraggedFiles}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                >
                    Upload images here
                </div>
                <WheelOfImages />
            </div>
        </div>
    );
};
