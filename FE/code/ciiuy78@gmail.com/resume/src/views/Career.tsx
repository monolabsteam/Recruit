import React from "react";
import Accordion from "src/components/Accrodion";
import Header from "src/components/Header";
import { SectionStyle } from "src/styles/Common";

const Career: React.FC = () => {
  return (
    <SectionStyle>
      <Header>Career</Header>
      <article>
        <ul>
          <Accordion
            accordionTitle={"42Maru ( 2020.09.01. ~ )"}
            accordionDesc={"Front-End Developer"}
            size="md"
          />
        </ul>
        <ul>
          <Accordion
            accordionTitle={"SSAFY ( 2019.07.01 ~ 2020.06.30. )"}
            accordionDesc={"Student"}
            size="md"
          />
        </ul>
      </article>
    </SectionStyle>
  );
};

export default Career;
