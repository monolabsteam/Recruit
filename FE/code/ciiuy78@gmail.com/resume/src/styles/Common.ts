import { styled } from "@stitches/react";

const SectionStyle = styled("section", {
  height: "100vh",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "0 20vw",
});

const ButtonStyle = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: "5px",
  minWidth: "100px",
  height: "30px",
  padding: "5px 10px",
  fontWeight: "bold",
  cursor: "pointer",

  "&:hover": {
    color: "white",
    backgroundColor: "#3f81f7",
    border: "white",
  },
});

export { SectionStyle, ButtonStyle };
