import { ContentWrapper } from "../src/styled";
import { ContentProps } from "../types";

export function Content({ children, ...props }: ContentProps) {
  return (
    <ContentWrapper children={children} {...props} />
  )
}
