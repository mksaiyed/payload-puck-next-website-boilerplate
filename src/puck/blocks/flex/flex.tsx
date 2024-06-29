import { Section } from '@/puck/components/Section/Section'
import { ComponentConfig, DropZone } from '@measured/puck'
import React from 'react'

export type FlexProps = {
  items: { minItemWidth?: number }[]
  minItemWidth: number
}

export const Flex: ComponentConfig<FlexProps> = {
  fields: {
    items: {
      type: 'array',
      arrayFields: {
        minItemWidth: {
          label: 'Minimum Item Width',
          type: 'number',
          min: 0,
        },
      },
      getItemSummary: (_, id) => `Item ${id}`,
    },
    minItemWidth: {
      label: 'Minimum Item Width',
      type: 'number',
      min: 0,
    },
  },
  defaultProps: {
    items: [{}, {}],
    minItemWidth: 356,
  },
  render: ({ puck, items, minItemWidth }) => {
    return (
      <Section>
        <div className="flex flex-wrap gap-6 min-h-0 min-w-0">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-1"
              style={{
                minWidth: item.minItemWidth || minItemWidth,
              }}
            >
              {puck.renderDropZone({
                zone: `item-${idx}`,
              })}
            </div>
          ))}
        </div>
      </Section>
    )
  },
}
