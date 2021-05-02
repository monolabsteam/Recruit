import React from "react";
import Accordion from "src/components/Accrodion";
import Header from "src/components/Header";
import { SectionStyle } from "src/styles/Common";

const Career: React.FC = () => {
  return (
    <SectionStyle>
      <Header>Career</Header>
      <ul>
        <Accordion
          accordionTitle={"42Maru ( 2020.09.01. ~ )"}
          accordionDesc={"Front-End Developer"}
        />
      </ul>
      <ul>
        <Accordion
          accordionTitle={"SSAFY ( 2019.07.01 ~ 2020.06.30. )"}
          accordionDesc={"Student"}
        />
      </ul>
    </SectionStyle>
  );
};

export default Career;
