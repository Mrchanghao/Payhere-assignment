import styled from "styled-components";


export const OverLay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  z-index: 10000;
  background-color: #475f7b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseDiv = styled.div`
  float: right;
  padding-right: 48px;
  margin-top: 0;
  display: flex;
  justify-content: flex-end;
`;

export const Root = styled.div`
  padding-bottom: 10px;
  overflow-y: auto;
  width: 500px;
  height: 250px;
  /* min-height: 445px; */
  padding-top: 7px;
  border-radius: 4px;
  box-shadow: -7px 8px 16px 0 rgba(55, 70, 95, 0.07);
  background-color: #ffffff;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const IconImg = styled.img`
  height: 13px;
  width: 13px;
  cursor: pointer;
  transform: translateY(10px);
`;

export const ModalHeader = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: center;
  .icon {
    width: 100.39px;
    height: 122px;
  }
`;

export const TitleArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
`;

export const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  display: block;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  color: #304156;
  width: 80%;
  text-align: center;
`;

export const Paragraph = styled.div`
  width: 100%;
  margin-top: 10px;

  p {
    font-weight: 500;
    font-size: 19px;
    text-align: center;
    color: #304156;
  }
`;