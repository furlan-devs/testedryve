import styled, { css } from "styled-components";

import type { ButtonVariant, StyledButtonProps } from "./types";

export const ButtonContainer = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 1.25rem;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 0.875rem;
  padding: 6px 10px;
  cursor: pointer;

  ${(props) => applyVariant(props.variant)};
`;

export const ButtonContent = styled.div`
  margin: 0 auto;
  gap: 7px;
  display: flex;
  align-items: center;
`;

export const applyVariant = (variant?: ButtonVariant) => {
  switch (variant) {
    case "link":
      return css`
        background-color: #f3f7ff;
        color: #6200ee;
      `;
    case "default":
    default:
      return css`
        background-color: #6200ee;
        color: #ffffff;
      `;
  }
};
