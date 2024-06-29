import { ComponentConfig } from "@measured/puck";
import React from "react";

export type GridProps = {
    rows: number;
    columns: number;
    rowGap: number;
    columnGap: number;
};

export const Grid: ComponentConfig<GridProps> = {
    fields: {
        rows: { type: "number", min: 1, label: "Rows" },
        columns: { type: "number", min: 1, label: "Columns" },
        rowGap: { type: "number", min: 0, label: "Row Gap" },
        columnGap: { type: "number", min: 0, label: "Column Gap" },
    },
    defaultProps: {
        rows: 2,
        columns: 3,
        rowGap: 16,
        columnGap: 16,
    },
    render: ({ puck, rows = 2, columns = 3, rowGap = 16, columnGap = 16 }) => {
        const cells = Array.from({ length: rows * columns });

        return (
            <div className="container">
                <div
                    className="lg:grid flex flex-col"
                    style={{
                        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr)`,
                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr)`,
                        rowGap: `${rowGap}px`,
                        columnGap: `${columnGap}px`,
                    }}
                >
                    {cells.map((_, i) => (
                        <div className="flex flex-col" key={i}>
                            {puck.renderDropZone({ zone: `cell-${i}` })}
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};
