import React from "react";
import { styled } from "@stitches/react";

const AsideStyle = styled("aside", {
  position: "fixed",
  top: "50%",
  right: "50px",
});

const SideBar: React.FC = () => {
  return <AsideStyle>sideBar</AsideStyle>;
};

export default SideBar;
