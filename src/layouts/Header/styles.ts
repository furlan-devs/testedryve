import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  box-shadow: 0 1px 0 0 rgb(224, 224, 224);
  background-color: #f3f4f6;
`;

export const HeaderContent = styled.div`
  width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  margin: 21px 0px 15px 110px;
  height: 34px;
  width: 167px;
  display: flex;

  span {
    margin: 18px 0px 6px 4px;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    color: rgb(165, 171, 183);
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 1.6875rem;
  margin-right: 34px;
`;

export const ActionButton = styled.a`
  display: flex;
  background-color: transparent;
  color: #0065ff;
  opacity: 0.3;
`;
