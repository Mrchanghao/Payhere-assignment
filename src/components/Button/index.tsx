import { PropsWithChildren } from "react";
import styled from "styled-components";

type ButtonProps = PropsWithChildren<{
  // type?: "primary" | "danger" | "light" | "dark" | "secondary";
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  type?: "submit" | "button";
  bg?: "primary" | "danger";
}>;

export const Button = ({
  type,
  bg,
  onClick,
  disabled,
  children,
}: ButtonProps) => {
  const btn = type || "button";
  const background = bg || "primary";
  return (
    <ButtonWrapper
      bg={background}
      type={btn}
      onClick={onClick}
      disabled={disabled}>
      <span>{children}</span>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ bg: "primary" | "danger" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  cursor: pointer;
  background-color: ${({ bg }) => (bg === "danger" ? "red" : "#0969da")};
  font-weight: 600;
  max-height: 56px;
  height: 56px;
  color: #fff;
  min-width: 56px;
  white-space: nowrap;
  user-select: none;
  border-radius: 6px;
  border: 0 solid transparent;
  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.26;
  }
  span {
    display: flex;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
  }
`;
