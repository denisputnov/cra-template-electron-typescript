import { FooterWrapper } from "../src/styled";
import { FooterProps } from "../src/types";

export function Footer({ children, ...props }: FooterProps) {
  return (
    <FooterWrapper children={children} {...props} />
  )
}