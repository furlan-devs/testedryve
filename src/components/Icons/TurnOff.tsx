import { IconProps } from "../Icon/types";

export const TurnOffIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-7 -7 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M5.5.5h-1v5h1v-5zm2.415 1.085l-.71.71C7.995 2.93 8.5 3.905 8.5 5c0 1.935-1.565 3.5-3.5 3.5S1.5 6.935 1.5 5c0-1.095.505-2.07 1.29-2.71l-.705-.705C1.115 2.41.5 3.63.5 5 .5 7.485 2.515 9.5 5 9.5S9.5 7.485 9.5 5c0-1.37-.615-2.59-1.585-3.415z"
        fill={color}
      />
    </svg>
  );
};
