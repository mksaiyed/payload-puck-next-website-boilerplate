'use server'
import { ComponentConfig } from '@measured/puck'

export type ZonePlayProps = {}

export const ZonePlay: ComponentConfig<ZonePlayProps> = {
  defaultProps: {},
  label: 'Zone Play',
  fields: {},
  render: props => {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div>{props.puck.renderDropZone({ zone: 'column1' })}</div>
        <div>{props.puck.renderDropZone({ zone: 'column2' })}</div>
      </div>
    )
  },
}
