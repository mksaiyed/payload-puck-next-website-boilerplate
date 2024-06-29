import { ComponentConfig } from '@measured/puck'
import React from 'react'

export type ColumnsProps = {
  distribution: 'auto' | 'manual'
  columns: {
    span?: number
  }[]
  gap: number
}

export const Columns: ComponentConfig<ColumnsProps> = {
  fields: {
    distribution: {
      type: 'radio',
      options: [
        {
          value: 'auto',
          label: 'Auto',
        },
        {
          value: 'manual',
          label: 'Manual',
        },
      ],
    },
    columns: {
      type: 'array',
      getItemSummary: (col, id) =>
        `Column ${id}, span ${col.span ? Math.max(Math.min(col.span, 12), 1) : 'auto'}`,
      arrayFields: {
        span: {
          label: 'Span (1-12)',
          type: 'number',
          min: 0,
          max: 12,
        },
      },
    },
    gap: { type: 'number', min: 0 },
  },
  defaultProps: {
    distribution: 'auto',
    columns: [{}, {}],
    gap: 16,
  },
  render: ({ puck, columns = [{}, {}], distribution = 'auto', gap = 16 }) => {
    const gridTemplateColumns =
      distribution === 'manual'
        ? 'repeat(12, minmax(0, 1fr))'
        : `repeat(${columns.length}, minmax(0, 1fr))`

    return (
      <div className="container">
        <div
          className={`flex flex-col min-h-0 min-w-0 gap-6 md:grid`}
          style={{
            gridTemplateColumns,
            gap: `${gap}px`,
          }}
        >
          {columns.map(({ span }, idx) => (
            <div
              key={idx}
              className="flex flex-col"
              style={{
                gridColumn:
                  distribution === 'manual' && span ? `span ${span} / span ${span}` : undefined,
              }}
            >
              {puck.renderDropZone({
                zone: `column-${idx}`,
              })}
            </div>
          ))}
        </div>
      </div>
    )
  },
}
