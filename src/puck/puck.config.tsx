import type { Config } from '@measured/puck'
import { Root, RootProps } from './root'
import { Columns, ColumnsProps } from './blocks/columns'
import { Flex, FlexProps } from './blocks/flex/flex'
import { VerticalSpace, VerticalSpaceProps } from './blocks/vertical-space'
import { ButtonGroup, ButtonGroupProps } from './blocks/button-group'
import { Heading, HeadingProps } from './blocks/heading'
import { Grid, GridProps } from './blocks/grid'
import { List, ListProps } from './blocks/list'
import { Container, ContainerProps } from './blocks/container'
import { ImageCarousel, ImageCarouselProps } from './blocks/image-carousel'
import { SmallContactSection, SmallContactSectionProps } from './blocks/small-contact-section'
import { Image, ImageProps } from './blocks/image'
import { Paragraph, ParagraphProps } from './blocks/paragraph'

type ComponentProps = {
  Columns: ColumnsProps
  Flex: FlexProps
  VerticalSpace: VerticalSpaceProps
  ButtonGroup: ButtonGroupProps
  Heading: HeadingProps
  Image: ImageProps
  Paragraph: ParagraphProps
  Grid: GridProps
  List: ListProps
  SmallContactSection: SmallContactSectionProps
  Container: ContainerProps
  ImageCarousel: ImageCarouselProps
}

export default {
  components: {
    Columns,
    Flex,
    VerticalSpace,
    ButtonGroup,
    Heading,
    Image,
    Paragraph,
    Grid,
    List,
    SmallContactSection,
    Container,
    ImageCarousel,
  },
  categories: {
    layout: {
      components: ['Container', 'Columns', 'Grid', 'VerticalSpace', 'Flex'],
    },
    content: {
      components: ['Heading', 'Paragraph', 'Image', 'List', 'ButtonGroup', 'ImageCarousel'],
    },
  },
  root: {
    render: Root,
    defaultProps: {
      title: 'Metal Awaining',
      description: '',
      keywords: '',
    },
    fields: {
      title: { type: 'text' },
      description: { type: 'textarea' },
      keywords: { type: 'text', label: 'Keywords seperated by comma' },
    },
  },
} satisfies Config<ComponentProps, RootProps, 'layout' | 'content'>
