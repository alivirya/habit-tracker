export const openModal = (modalId: string): void => {
    const modal = document.getElementById(modalId);
    if (modal === null) return;
    modal.style.display = "block";
};

export const closeModal = (modalId: string): void => {
    const modal = document.getElementById(modalId);
    if (modal === null) return;
    modal.style.display = "none";
};
