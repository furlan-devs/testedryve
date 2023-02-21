import { IconType } from "../../types/icons";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  type?: IconType;
}
