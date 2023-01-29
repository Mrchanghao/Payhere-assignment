import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  type?: "primary" | "danger" | "light" | "dark" | "secondary";
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;
