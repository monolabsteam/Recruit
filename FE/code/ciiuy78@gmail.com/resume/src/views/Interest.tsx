import React from "react";
import Header from "src/components/Header";
import { InterestData } from "src/data/Interest";
import { SectionStyle } from "src/styles/Common";
import { styled } from "@stitches/react";

import LinkImage from "src/assets/images/link.png";

const Interest: React.FC = () => {
  return (
    <SectionStyle id="interest">
      <Header>Interest</Header>
      <article>
        {InterestData.map((interest) => (
          <ListItemDivStyle key={`${interest.title}`}>
            <p>
              <b>{interest.title}</b>
            </p>
            <a href={`${interest.link}`} target="blank">
              <img src={LinkImage} alt="link" />
            </a>
          </ListItemDivStyle>
        ))}
      </article>
    </SectionStyle>
  );
};

const ListItemDivStyle = styled("div", {
  display: "flex",
  alignItems: "center",

  "& img": {
    width: "15px",
    height: "15px",
    cursor: "pointer",
    marginLeft: "10px",
  },
});

export default Interest;