import { IconType } from "../../types/icons";

export type ButtonVariant = "default" | "link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  variant?: ButtonVariant;
}

export interface StyledButtonProps {
  variant?: ButtonVariant;
}
