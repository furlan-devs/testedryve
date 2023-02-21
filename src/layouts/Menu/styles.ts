import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 100vh;
  width: 80px;
  box-shadow: 0 1px 0 0 rgb(224, 224, 224);
  /* background-color: #f3f4f6; */
  background-color: lightblue;
  position: absolute;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0 0 0 2px white, 0 0 0 4px #0065ff;
  background-color: lightblue;
`;

export const MenuContent = styled.div`
  width: 1366px;
  margin: 0 auto;
  display: block;

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
  flex-direction: column;
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
