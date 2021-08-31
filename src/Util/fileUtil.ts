export const updateBackground = (
    callback: (s: string) => void,
    files: FileList
): void => {
    const reader = new FileReader();
    reader.onload = () => {
        const dataUrl = reader.result as string;
        callback(dataUrl);
    };
    reader.readAsDataURL(files[0]);
};
