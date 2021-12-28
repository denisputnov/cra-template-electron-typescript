import { HeaderWrapper } from "../src/styled";
import { HeaderProps } from "../types";

export function Header({ children, ...props }: HeaderProps) {
  return (
    <HeaderWrapper children={children} {...props} />
  )
}