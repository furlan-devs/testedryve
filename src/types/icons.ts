export type IconType =
  | "add"
  | "home"
  | "person"
  | "car"
  | "triangule"
  | "wallet"
  | "turnOff"
  | "interrogation"
  | "dollarSign"
  | "downArrow"
  | "search"
  | "bell"
  | "upArrow"
  | "rightArrow"
  | "filter"
  | "verticalThreeDots"
  | "chevronLeft"
  | "chevronRight"
  | "computer"
  | "logo";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
