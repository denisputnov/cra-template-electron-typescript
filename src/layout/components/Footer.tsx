import { FooterWrapper } from "../src/styled";
import { FooterProps } from "../types";

export function Footer({ children, ...props }: FooterProps) {
  return (
    <FooterWrapper children={children} {...props} />
  )
}