import { HeaderWrapper } from "../src/styled";
import { HeaderProps } from "../src/types";

export function Header({ children, ...props }: HeaderProps) {
  return (
    <HeaderWrapper children={children} {...props} />
  )
}