import React, { ReactElement } from "react";

export interface IconButtonProps {
    onClick: () => void;
    className?: string;
    icon?: string;
}

export const IconButton = ({
    onClick,
    className,
}: IconButtonProps): ReactElement => {
    return (
        <button onClick={onClick} className={className}>
            <svg
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M13.12 24h-2.24a1.498 1.498 0 01-1.486-1.32l-.239-1.876a9.45 9.45 0 01-1.374-.569l-1.494 1.161a1.492 1.492 0 01-1.985-.126l-1.575-1.575a1.488 1.488 0 01-.122-1.979l1.161-1.495a9.232 9.232 0 01-.569-1.374l-1.88-.239A1.501 1.501 0 010 13.12v-2.24c0-.757.567-1.396 1.32-1.486l1.876-.239a9.45 9.45 0 01.569-1.374l-1.16-1.494a1.49 1.49 0 01.127-1.986l1.575-1.575a1.489 1.489 0 011.979-.122L7.78 3.766a9.416 9.416 0 011.375-.569l.239-1.88C9.484.567 10.123 0 10.88 0h2.24c.757 0 1.396.567 1.486 1.32l.239 1.876c.478.155.938.346 1.375.569l1.494-1.161a1.49 1.49 0 011.985.127l1.575 1.575c.537.521.591 1.374.122 1.979L20.235 7.78c.224.437.415.897.569 1.374l1.88.239A1.5 1.5 0 0124 10.88v2.24c0 .757-.567 1.396-1.32 1.486l-1.876.239a9.45 9.45 0 01-.569 1.374l1.161 1.494a1.49 1.49 0 01-.127 1.985l-1.575 1.575a1.487 1.487 0 01-1.979.122l-1.495-1.161a9.232 9.232 0 01-1.374.569l-.239 1.88A1.5 1.5 0 0113.12 24zm-5.39-4.86c.083 0 .168.021.244.063a8.393 8.393 0 001.774.736.5.5 0 01.358.417l.28 2.2c.03.251.247.444.494.444h2.24a.504.504 0 00.493-.439l.281-2.204a.5.5 0 01.358-.417 8.393 8.393 0 001.774-.736.499.499 0 01.55.042l1.75 1.36a.492.492 0 00.655-.034l1.585-1.585a.495.495 0 00.039-.66l-1.36-1.75a.5.5 0 01-.042-.55 8.393 8.393 0 00.736-1.774.5.5 0 01.417-.358l2.2-.28A.507.507 0 0023 13.12v-2.24a.504.504 0 00-.439-.493l-2.204-.281a.5.5 0 01-.417-.358 8.393 8.393 0 00-.736-1.774.497.497 0 01.042-.55l1.36-1.75a.49.49 0 00-.033-.654l-1.585-1.585a.492.492 0 00-.66-.039l-1.75 1.36a.5.5 0 01-.551.042 8.359 8.359 0 00-1.774-.736.5.5 0 01-.358-.417l-.28-2.2A.507.507 0 0013.12 1h-2.24a.504.504 0 00-.493.439l-.281 2.204a.502.502 0 01-.358.418 8.356 8.356 0 00-1.774.735.5.5 0 01-.551-.041l-1.75-1.36a.49.49 0 00-.654.033L3.434 5.014a.495.495 0 00-.039.66l1.36 1.75a.5.5 0 01.042.55 8.341 8.341 0 00-.736 1.774.5.5 0 01-.417.358l-2.2.28A.505.505 0 001 10.88v2.24c0 .247.193.464.439.493l2.204.281a.5.5 0 01.417.358c.18.626.428 1.223.736 1.774a.497.497 0 01-.042.55l-1.36 1.75a.49.49 0 00.033.654l1.585 1.585a.494.494 0 00.66.039l1.75-1.36a.515.515 0 01.308-.104z" />
                <path d="M12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z" />
            </svg>
        </button>
    );
};
