import { IconType } from "../../types/icons";

export interface CardProps {
  title?: string;
  result?: number;
  status?: number;
  icon?: IconType;
  isMoney?: boolean;
}
