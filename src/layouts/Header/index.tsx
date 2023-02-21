import { useCallback } from "react";

import * as S from "./styles";
import { Icon } from "../../components";
import { ActionButtonProps } from "./types";

export const Header: React.FC = () => {
  const ActionButtons = useCallback((): JSX.Element => {
    const actionButtonsProps: ActionButtonProps[] = [
      {
        "aria-label": "Placeholder label",
        iconType: "search",
        id: "search-button",
      },
      {
        "aria-label": "Notifications",
        iconType: "bell",
        id: "bell-button",
      },
    ];

    return (
      <>
        {actionButtonsProps.map(({ iconType, ...props }, index) => (
          <S.ActionButton href="#" key={index} {...props}>
            <Icon type={iconType} size={25} />
          </S.ActionButton>
        ))}
      </>
    );
  }, []);

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo>
          <Icon size={101} type="logo"></Icon>
          <span>backoffice</span>
        </S.Logo>
        <S.Nav>{<ActionButtons />}</S.Nav>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
