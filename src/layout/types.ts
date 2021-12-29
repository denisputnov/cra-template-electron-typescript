import { ReactChild, ReactChildren, ReactElement } from "react"

export type JustifyContent = "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly"

export type LayoutProps = {
  header?: React.FC<HeaderProps> | ReactElement
  content: React.FC<ContentProps> | ReactElement
  footer?: React.FC<FooterProps> | ReactElement
  headerless?: boolean
  footerless?: boolean
}

type Zone = {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | null
  minHeight?: string
  justifyContent?: JustifyContent
  backgroundColor?: string
  boxShadow?: string
}

export type HeaderProps = Zone & {
  unsafe?: boolean
}
export type ContentProps = Pick<Zone, "children" | "backgroundColor"> & {
  padding?: string
  scrollable?: boolean
  enableHorizontalScroll?: boolean
}

export type FooterProps = Zone
