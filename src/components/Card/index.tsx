import { Icon } from "../Icon";
import * as S from "./styles";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  title,
  result,
  status,
  icon,
  isMoney = false,
}) => {
  return (
    <S.CardContainer>
      <S.CardContent>
        <S.Left>
          <S.Title>{title}</S.Title>
          {isMoney ? (
            <S.Results>R$ {result}</S.Results>
          ) : (
            <S.Results>{result}</S.Results>
          )}
          <S.Status>
            <Icon type="chevronLeft" size={20} color="#6200ee"></Icon>

            <h2 className={status < 0 ? "negative" : ""}>
              {status}%<span>desde ontem</span>
            </h2>
          </S.Status>
        </S.Left>

        <S.Right>
          <S.IconSpace>
            <Icon type={icon} size={30} color="#0065ff" />
          </S.IconSpace>
        </S.Right>
      </S.CardContent>
    </S.CardContainer>
  );
};
