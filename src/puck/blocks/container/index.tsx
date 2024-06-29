import { ComponentConfig } from '@measured/puck'
import React from 'react'

export type ContainerProps = {}

export const Container: ComponentConfig<ContainerProps> = {
  fields: {},
  defaultProps: {},
  render: ({ puck }) => {
    return <div className="container">{puck.renderDropZone({ zone: 'container-children' })}</div>
  },
}
