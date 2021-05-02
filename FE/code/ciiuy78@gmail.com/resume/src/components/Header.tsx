import React from "react";
import { styled } from "@stitches/react";

const HeaderStyle = styled("div", {
  width: "50vw",
  "& h2": {
    fontSize: "40px",
  },
});

const Header: React.FC = ({ children }) => {
  return (
    <HeaderStyle>
      <h2>{children}</h2>
    </HeaderStyle>
  );
};

export default Header;
