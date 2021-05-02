import React from "react";
import Main from "src/views/Main";
import AboutMe from "src/views/AboutMe";
import Career from "src/views/Career";
import Project from "src/views/Project";
import Stack from "src/views/Stack";
import SideBar from "src/components/SideBar";
import { styled } from "@stitches/react";

const WrapperMainStyle = styled("main", {
  // width: "100%",
  // height: "auto",
});

const App: React.FC = () => {
  return (
    <WrapperMainStyle>
      <Main />
      <AboutMe />
      <Career />
      <Project />
      <Stack />
      <SideBar />
    </WrapperMainStyle>
  );
};

export default App;
