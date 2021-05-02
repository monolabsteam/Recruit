import React from "react";
import Main from "src/views/Main";
import Interest from "src/views/Interest";
import Career from "src/views/Career";
import Project from "src/views/Project";
import Stack from "src/views/Stack";
import SideBar from "src/components/SideBar";
import { styled } from "@stitches/react";

const WrapperMainStyle = styled("main", {});

const App: React.FC = () => {
  return (
    <WrapperMainStyle>
      <Main />
      <Career />
      <Project />
      <Stack />
      <Interest />
      <SideBar />
    </WrapperMainStyle>
  );
};

export default App;
