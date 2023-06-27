import styled from "styled-components";

export const Overlay = styled.article`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 2rem;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.span`
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 24px;
  cursor: pointer;
`;

export const Text = styled.p`
  text-align: center;
`;
