import React from "react"
import styled from "styled-components"
import { parseStyleSheet } from "@skynexui/responsive_stylesheet"
import { StyleSheet }  from "@src/theme/StyleSheet"

interface StyledBaseComponent {
  styleSheet?: StyleSheet
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`

export const BaseComponent = (props) => {
  return (
    <StyledBaseComponent {...props} />
  )
}

BaseComponent.defaultProps = {
  styleSheet: {}
}