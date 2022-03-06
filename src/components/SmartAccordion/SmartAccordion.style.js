import styled from "styled-components";

export const Wrapper = styled.div`
  width: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  margin-top: 30px;
`;

export const HeaderWrapper = styled.div`
  height: 30px;
  background-color: #ffe6ee;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  text-align: center;
  line-height: 30px;
  font-weight: 400;

  cursor: pointer;
`;

export const BodyWrapper = styled.div`
  height: 60px;
  padding: 10px;
  border: 1px solid #ffe6ee;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
