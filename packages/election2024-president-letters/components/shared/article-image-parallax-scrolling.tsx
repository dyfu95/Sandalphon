import styled from 'styled-components'

import { breakpoint } from '../../styles/theme'
import { zIndex } from '../../styles/z-index'
const Figure = styled.figure`
  margin-bottom: 24px;
`
import ImageCaption from './image-caption'

const Div = styled.div<{
  imagesSrc: ImagesSrc
}>`
  margin: 0 auto;
  width: 100%;
  /* z-index: ${zIndex.overHeader}; */
  height: 75vw;
  position: relative;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ imagesSrc }) => `url(${imagesSrc.mobile})`};
  ${breakpoint.md} {
    background-image: ${({ imagesSrc }) => `url(${imagesSrc.tablet})`};
  }
  ${breakpoint.xl} {
    background-image: ${({ imagesSrc }) => `url(${imagesSrc.desktop})`};

    width: 100%;
    height: 60vw;
  }
  @media only screen {
    background-attachment: scroll;
  }
`
export type ImagesSrc = {
  desktop: string
  tablet: string
  mobile: string
  desktopWebP: string
  tabletWebP: string
  mobileWebP: string
}
type Props = {
  imagesSrc: ImagesSrc
  imageCaption?: string
}

export default function ArticleImageParallaxScrolling({
  imagesSrc,
  imageCaption = '',
}: Props) {
  const hasImageCaption = !!imageCaption
  return (
    <Figure>
      <Div imagesSrc={imagesSrc}></Div>
      {hasImageCaption && <ImageCaption>{imageCaption}</ImageCaption>}
    </Figure>
  )
}
