import { IconProps } from "../Icon/types";

export const WalletIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2.5 -3 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M18 15v1c0 1.1-.9 2-2 2H2c-1.11 0-2-.9-2-2V2C0 .9.89 0 2 0h14c1.1 0 2 .9 2 2v1H9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V5H9v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
        fill={color}
      />
    </svg>
  );
};
