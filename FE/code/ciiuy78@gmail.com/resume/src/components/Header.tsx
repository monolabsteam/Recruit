import React from "react";
import { styled } from "@stitches/react";

const Header: React.FC = ({ children }) => {
  return (
    <HeaderStyle>
      <h2>{children}</h2>
    </HeaderStyle>
  );
};

const HeaderStyle = styled("div", {
  width: "15vw",
  display: "flex",
  marginRight: "20px",

  "& h2": {
    fontSize: "40px",
  },
});

export default Header;
