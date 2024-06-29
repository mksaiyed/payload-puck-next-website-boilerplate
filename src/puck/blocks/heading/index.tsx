import { cn } from "@/lib/utils/cn";
import { ComponentConfig } from "@measured/puck";
import React from "react";

export type HeadingProps = {
    title: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    fontSize: number;
    textAlign: "center" | "left" | "right";
    color: "default" | "primary" | "beige";
};

export const Heading: ComponentConfig<HeadingProps> = {
    fields: {
        title: { type: "text" },
        level: { type: "number", min: 1, max: 6 },
        fontSize: { type: "number", min: 0 },
        textAlign: {
            type: "radio",
            options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
            ],
        },
        color: {
            type: "radio",
            options: [
                { label: "Default", value: "default" },
                { label: "Primary", value: "primary" },
                { label: "Beige", value: "beige" },
            ],
        },
    },
    defaultProps: {
        title: "Heading",
        level: 1,
        fontSize: 40,
        textAlign: "center",
        color: "default",
    },
    render: ({
        title = "Heading",
        level = 1,
        fontSize = 40,
        textAlign = "center",
        color = "default",
    }) => {
        const Tag: keyof JSX.IntrinsicElements =
            `h${level}` as keyof JSX.IntrinsicElements;
        return (
            <Tag
                style={{ fontSize: `${fontSize}px` }}
                className={cn({
                    "text-center": textAlign === "center",
                    "text-left": textAlign === "left",
                    "text-right": textAlign === "right",
                    "font-leagueGothic": true,
                    "text-beige": color === "beige",
                    "text-primary": color === "primary",
                })}
            >
                {title}
            </Tag>
        );
    },
};
