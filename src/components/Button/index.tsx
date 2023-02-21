import { Icon } from "../Icon";

import type { ButtonProps } from "./types";

import * as S from "./styles";

export const Button: React.FC<ButtonProps> = ({
  label,
  leftIcon,
  rightIcon,
  type = "button",
  variant,
  ...rest
}) => {
  return (
    <S.ButtonContainer type={type} variant={variant} {...rest}>
      <S.ButtonContent>
        {!!leftIcon && <Icon type={leftIcon} size={10} />}
        {!!label && <span>{label}</span>}
        {!!rightIcon && <Icon type={rightIcon} size={10} />}
      </S.ButtonContent>
    </S.ButtonContainer>
  );
};
