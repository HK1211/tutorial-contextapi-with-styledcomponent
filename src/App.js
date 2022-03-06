import React from "react";
import styled from "styled-components";
import StupidAccordion from "../src/components/StupidAccordion";
import SmartAccordion, {
  SmartAccordionHeader,
  SmartAccordionBody,
} from "../src/components/SmartAccordion";

export default function App() {
  return (
    <>
      <StupidAccordion />
      <SmartAccordion>
        <SmartAccordionHeader>I'm smart Accordion</SmartAccordionHeader>
        <SmartAccordionBody>Body</SmartAccordionBody>
      </SmartAccordion>
      <SmartAccordion>
        <StyledSmartHeader>I'm smart Accordion222</StyledSmartHeader>
        <StyledSmartBody>Body</StyledSmartBody>
      </SmartAccordion>
    </>
  );
}

const StyledSmartHeader = styled(SmartAccordionHeader)`
  background-color: green;
`;

const StyledSmartBody = styled(SmartAccordionBody)`
  border: 1px solid green;
`;
