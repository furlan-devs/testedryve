import {
  AddIcon,
  HomeIcon,
  PersonIcon,
  CarIcon,
  TrianguleIcon,
  WalletIcon,
  TurnOffIcon,
  InterrogationIcon,
  DollarSignIcon,
  DownArrowIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  VerticalThreeDotsIcon,
  FilterIcon,
  RightArrowIcon,
  UpArrowIcon,
  BellIcon,
  SearchIcon,
  ComputerIcon,
  LogoIcon,
} from "../Icons";

import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({
  color,
  size = 10,
  type,
  ...rest
}) => {
  const iconProps = { ...rest, color, size };

  switch (type) {
    case "add":
      return <AddIcon {...iconProps} />;
    case "home":
      return <HomeIcon {...iconProps} />;
    case "person":
      return <PersonIcon {...iconProps} />;
    case "car":
      return <CarIcon {...iconProps} />;
    case "downArrow":
      return <DownArrowIcon {...iconProps} />;
    case "triangule":
      return <TrianguleIcon {...iconProps} />;
    case "wallet":
      return <WalletIcon {...iconProps} />;
    case "turnOff":
      return <TurnOffIcon {...iconProps} />;
    case "interrogation":
      return <InterrogationIcon {...iconProps} />;
    case "search":
      return <SearchIcon {...iconProps} />;
    case "chevronLeft":
      return <ChevronLeftIcon {...iconProps} />;
    case "upArrow":
      return <UpArrowIcon {...iconProps} />;
    case "dollarSign":
      return <DollarSignIcon {...iconProps} />;
    case "filter":
      return <FilterIcon {...iconProps} />;
    case "rightArrow":
      return <RightArrowIcon {...iconProps} />;
    case "bell":
      return <BellIcon {...iconProps} />;
    case "verticalThreeDots":
      return <VerticalThreeDotsIcon {...iconProps} />;
    case "chevronRight":
      return <ChevronRightIcon {...iconProps} />;
    case "computer":
      return <ComputerIcon {...iconProps} />;
    case "logo":
      return <LogoIcon {...iconProps} />;

    default:
      return <></>;
  }
};
