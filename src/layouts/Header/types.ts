import { IconType } from "../../types/icons";

export interface ActionButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  iconType: IconType;
}
