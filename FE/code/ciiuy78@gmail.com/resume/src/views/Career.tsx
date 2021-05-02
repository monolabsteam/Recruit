import React from "react";
import Accordion from "src/components/Accrodion";
import Header from "src/components/Header";
import { CareerData } from "src/data/Career";
import { SectionStyle } from "src/styles/Common";
import { styled } from "@stitches/react";

const Career: React.FC = () => {
  return (
    <SectionStyle id="career">
      <Header>Career</Header>
      <CareerArticleStyle>
        {CareerData.map((career) => (
          <ul key={`${career.title}`}>
            <Accordion
              accordionTitle={career.title}
              accordionDesc={career.description}
              size="md"
            />
          </ul>
        ))}
      </CareerArticleStyle>
    </SectionStyle>
  );
};

const CareerArticleStyle = styled("article", {
  border: "1px solid black",
  borderRadius: "5px",

  "& ul": {
    borderBottom: "1px solid black",
    margin: "0",
    padding: "0",
  },
  "& ul:last-child": {
    borderBottom: "none",
  },
});

export default Career;
