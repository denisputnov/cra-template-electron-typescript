import { ContentWrapper } from "../src/styled";
import { ContentProps } from "../types";

export function Content({ children, scrollable = true, ...props }: ContentProps) {
  return (
    <ContentWrapper children={children} scrollable={scrollable} {...props} />
  )
}
