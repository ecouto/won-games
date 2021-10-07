import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakingPoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakingPoint
  greaterThan?: breakingPoint
}

const MediaMatchModifiers = {
  lessThan: (size: breakingPoint) => css`
    ${media.lessThan(size)` display: block `}
  `,
  greaterThan: (size: breakingPoint) => css`
    ${media.greaterThan(size)` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && MediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && MediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
