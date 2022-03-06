import React, { useState } from "react";
import * as S from "./StupidAccordion.style";

const StupidAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.HeaderWrapper onClick={() => setIsOpen(!isOpen)}>
        I'm stupid Accordion 2222
      </S.HeaderWrapper>
      <S.BodyWrapper isOpen={isOpen}>Body</S.BodyWrapper>
    </S.Wrapper>
  );
};

export default StupidAccordion;
