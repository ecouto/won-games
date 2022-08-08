import styled, { css } from 'styled-components'
import theme from 'styles/theme'

export const Container = styled.div`
  ${() => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
