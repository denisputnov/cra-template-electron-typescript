import styled from "styled-components"
import { ContentProps, FooterProps, HeaderProps } from "./types"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const HeaderWrapper = styled.header<HeaderProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ?? "start"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#eee"};
  flex: 0 1 ${({ minHeight }) => minHeight ?? "28px"};
  padding: ${({ unsafe }) => unsafe ? "0" : "0 10px 0 68px"};
  align-items: center;
  overflow: hidden;
`

const ContentWrapper = styled.main<ContentProps>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  padding: ${({ padding }) => padding ?? "10px"};
  flex: 1 1 auto;
  overflow-x: ${({ enableHorizontalScroll }) => enableHorizontalScroll ? "auto" : "hidden"};
  overflow-y: ${({ scrollable }) => scrollable ? "auto" : "hidden"};
`

const FooterWrapper = styled.footer<FooterProps>`
  justify-content: ${({ justifyContent }) => justifyContent ?? "start"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#eee"};
  flex: 0 1 ${({ minHeight }) => minHeight ?? "28px"};
  align-items: center;
  overflow: hidden;
  min-height: 20px;
`

export { 
  Root, 
  HeaderWrapper, 
  ContentWrapper, 
  FooterWrapper 
}