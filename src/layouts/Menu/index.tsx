import { useCallback } from "react";

import * as S from "./styles";
import { Icon } from "../../components";
import { ActionButtonProps } from "./types";

export const Menu: React.FC = () => {
  const ActionButtons = useCallback((): JSX.Element => {
    const actionButtonsProps: ActionButtonProps[] = [
      {
        "aria-label": "Início",
        iconType: "home",
        id: "home-button",
      },
      {
        "aria-label": "Clientes",
        iconType: "person",
        id: "person-button",
      },
      {
        "aria-label": "Veículos",
        iconType: "car",
        id: "car-button",
      },
      {
        "aria-label": "Trinagulação",
        iconType: "triangule",
        id: "triangulation-button",
      },
      {
        "aria-label": "Financeiro",
        iconType: "wallet",
        id: "wallet-button",
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
    <S.MenuContainer>
      <S.MenuContent>
        <S.Avatar></S.Avatar>
        <S.Nav>{<ActionButtons />}</S.Nav>
      </S.MenuContent>
    </S.MenuContainer>
  );
};
