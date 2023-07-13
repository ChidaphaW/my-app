import { ReactNode } from "react";

export type ButtonProp = {
    onClick: () => void,
    children:ReactNode,
    variant?:"contained" | "outlined",
    color?: "error" | "inherit" | "primary" | "secondary" | "success" | "info" | "warning",
};

