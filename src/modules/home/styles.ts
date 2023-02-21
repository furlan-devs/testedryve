import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1366px;
  height: 100vh;
  background-color: #e0e0e0;
  margin: 0 auto;
`;

export const TopContent = styled.div`
  width: 1201px;
  height: 110px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 30px 55px 30px 110px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export const BottomContent = styled.div`
  width: 1201px;
  height: 640px;
  margin: 30px 55px 30px 110px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const LeftContent = styled.div`
  width: 794px;
  height: 640px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const LeftContentTop = styled.div`
  width: 747px;
  height: 24px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-top: 18px;

  h1 {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
  }

  a {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const LeftContentLabels = styled.div`
  width: 607px;
  height: 24px;
  margin: 20px 167px 19px 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1.5px;

  p:nth-child(1) {
    margin-right: 285px;
  }

  p:nth-child(2) {
    margin-right: 110px;
  }
`;

export const LeftContentList = styled.div`
  border-top: 1px solid rgb(224, 224, 224);
  width: 794px;
  height: 505px;
  max-height: 505px;
  overflow: auto;
  background-color: white;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    border: 3px solid white;
  }
`;

export const ListItem = styled.div`
  min-height: 100px;
  border-bottom: 1px solid rgb(224, 224, 224);
  display: flex;
  flex-direction: row;
`;

export const FotoVeiculo = styled.div`
  width: 80px;
  height: 60px;
  background-color: blue;
  margin: 20px 10px 20px 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DadosVeiculo = styled.div`
  width: 310px;
  height: 60px;
  margin: 20px 0px;
  text-transform: uppercase;
  gap: 5px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #1e2c4c;
  }
  p {
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.33px;
    color: #768095;
  }
`;

export const Valor = styled.div`
  width: 148px;
  height: 60px;
  margin: 20px 0px;
  text-transform: uppercase;
  gap: 5px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #1e2c4c;
  }
  p {
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.33px;
    color: #768095;
  }
`;

export const Status = styled.div`
  width: 176px;
  height: 60px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 11px;

  div {
    background-color: #f3f7ff;
    width: 176px;
    height: 26px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 143px;
      height: 12px;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #768095;
    }
  }

  p {
    width: 143px;
    height: 12px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #768095;
    margin: 0 auto;
  }
`;

export const LeftContentFooter = styled.div`
  border-top: 1px solid rgb(224, 224, 224);
  width: 794px;
  height: 37px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  a {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    color: #0065ff;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 26.5px;
  }
`;

export const RightContent = styled.div`
  width: 387px;
  height: 640px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 30px;
  font-weight: bold;
`;

export const RigthCardTop = styled.div`
  width: 100%;
  height: 384px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RigthCardBottom = styled.div`
  width: 100%;
  height: 226px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  width: 1200px;
  margin: 30px 55px 0px 110px;

  height: 70px;
  /* box-shadow: 0 0 10px 0 rgb(224, 224, 224); */
  border-top: 1px solid f3f4f6;
  background-color: #e0e0e0;
`;
