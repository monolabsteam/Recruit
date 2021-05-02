import React from "react";
import Accordion from "src/components/Accrodion";
import { SectionStyle } from "src/styles/Common";
import { styled } from "@stitches/react";

const CareerHeaderStyle = styled("div", {
  width: "50vw",

  "& h2": {
    fontSize: "40px",
  },
});

const Career: React.FC = () => {
  return (
    <SectionStyle>
      <CareerHeaderStyle>
        <h2>Career</h2>
      </CareerHeaderStyle>
      <Accordion
        accordionTitle={"42Maru ( 2020.09.01. ~ )"}
        accordionDesc={"Front-End Developer"}
      />
      <Accordion
        accordionTitle={"SSAFY ( 2019.07.01 ~ 2020.06.30. )"}
        accordionDesc={"Student"}
      />
    </SectionStyle>
  );
};

export default Career;
