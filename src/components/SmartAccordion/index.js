import React, { useState } from "react";
import * as S from "./SmartAccordion.style";

const AccordionContext = React.createContext();
const useAccordionContext = () => React.useContext(AccordionContext);

export const SmartAccordion = (props) => {
  const [isOpen, setIsOpen] = useState();
  const value = {
    isOpen,
    setIsOpen,
  };
  return (
    <AccordionContext.Provider value={value}>
      <S.Wrapper>{props.children}</S.Wrapper>
    </AccordionContext.Provider>
  );
};

export const SmartAccordionHeader = (props) => {
  const { setIsOpen } = useAccordionContext();
  return (
    <S.HeaderWrapper
      className={props.className}
      onClick={() => setIsOpen((e) => !e)}
    >
      {props.children}
    </S.HeaderWrapper>
  );
};

export const SmartAccordionBody = (props) => {
  const { isOpen } = useAccordionContext();
  return (
    <S.BodyWrapper className={props.className} isOpen={isOpen}>
      {props.children}
    </S.BodyWrapper>
  );
};

export default SmartAccordion;
