import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Left = styled.div`
  width: 303px;
  height: 110px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: 1.5px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  margin-left: 20px;
  margin-top: 13px;
`;

export const Results = styled.h2`
  height: 36px;
  margin: 6px 9px 8px 20px;
  font-size: 34px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.87);
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 13px;

  .negative {
    color: #fc4a40;
  }

  h2 {
    color: #6200ee;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;

    gap: 5px;

    span {
      font-size: 11px;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const Right = styled.div`
  width: 84px;
  height: 110px;
  background-color: white;
`;

export const IconSpace = styled.div`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-color: #f3f7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
