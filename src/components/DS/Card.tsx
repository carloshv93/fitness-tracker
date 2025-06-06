import type {PropsWithChildren} from "react";

export type CardProps = {
    onClick?: () => void,
} & PropsWithChildren

export const Card = ({onClick, children}: CardProps) => {
    return (
        <div style={{
            padding: "0.5rem",
            border: "1px solid var(--primary-color)",
            borderRadius: "1rem",
            boxShadow: "0 0 1rem var(--main-color)",
            cursor: onClick && "pointer",
            background: "var(--quinary-color)"

        }}
             onClick={onClick}
        >
            {children}
        </div>
    )
}
