import React, { useState } from "react";
import { styled } from "@stitches/react";

const AsideStyle = styled("aside", {
  position: "fixed",
  top: "calc(50% - 80px)",
  right: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",

  "& .sidebar-inner-wrapper": {
    display: "flex",
    alignItems: "center",
    height: "20px",
  },
  "& .sidebar-target": {
    fontSize: "12px",
    marginRight: "10px",
    cursor: "pointer",
  },
  "& .visible": {
    display: "block",
  },
  "& .invisible": {
    display: "none",
  },
  "& button": {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "black",
    cursor: "pointer",
  },
  "& .sidebar-line": {
    height: "15px",
    border: "1px dashed",
    marginRight: "5px",
  },
});

const ScrollTargets: string[] = [
  "main",
  "career",
  "project",
  "stack",
  "interest",
];

const SideBar: React.FC = () => {
  const [isShowTarget, setIsShowTarget] = useState<boolean>(false);

  const onClickGoTo = (target: String) => {
    const targetEl = document.getElementById(`${target}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onMouseOverSideBar = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsShowTarget(true);
  };

  const onMouseLeaveSideBar = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsShowTarget(false);
  };

  return (
    <AsideStyle
      onMouseOver={onMouseOverSideBar}
      onMouseLeave={onMouseLeaveSideBar}
    >
      {ScrollTargets.map((target, idx) => (
        <React.Fragment key={`${target}`}>
          <div className="sidebar-inner-wrapper">
            <div
              className={`sidebar-target ${
                isShowTarget ? "visible" : "invisible"
              }`}
              onClick={() => onClickGoTo(target)}
            >
              {target.toUpperCase()}
            </div>
            <button type="button" onClick={() => onClickGoTo(target)}></button>
          </div>
          {idx !== ScrollTargets.length - 1 && (
            <div className="sidebar-line"></div>
          )}
        </React.Fragment>
      ))}
    </AsideStyle>
  );
};

export default SideBar;
