import React, { useRef, useState } from "react";
import { styled } from "@stitches/react";

const AccordionListDivStyle = styled("div", {});

const Accordion: React.FC<IArchordionProps> = (props) => {
  const { accordionTitle, accordionDesc, size = "md" } = props;

  const [isShow, setIsShow] = useState<boolean>(false);

  const arcordionListRef = useRef<HTMLDivElement>(null);

  const onClickArcordionBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsShow(isShow ? false : true);
  };

  return (
    <AccordionDivStyle size={size}>
      <div
        className={`accordion-title-wrapper ${
          isShow ? "colored" : "non-colored"
        }`}
      >
        <button type="button" onClick={onClickArcordionBtn}>
          {accordionTitle}
        </button>
        <button type="button" onClick={onClickArcordionBtn}>
          {isShow ? "▲" : "▼"}
        </button>
      </div>
      <div
        className={`accordion-list ${isShow ? "visible" : "invisible"}`}
        ref={arcordionListRef}
      >
        <AccordionList accordionDesc={accordionDesc} />
      </div>
    </AccordionDivStyle>
  );
};

const AccordionList: React.FC<IArchordionListProps> = (props) => {
  const { accordionDesc } = props;
  return (
    <AccordionListDivStyle className="accordion-list-desc">
      {accordionDesc}
    </AccordionListDivStyle>
  );
};

type Size = "sm" | "md" | "lg";

interface IArchordionListProps {
  accordionDesc?: String;
}

interface IArchordionProps extends IArchordionListProps {
  accordionTitle: String;
  size?: Size;
}

const AccordionDivStyle = styled("div", {
  variants: {
    size: {
      sm: {
        width: "calc(100vw / 12 * 3)",
      },
      md: {
        width: "calc(100vw / 12 * 6)",
      },
      lg: {
        width: "calc(100vw / 12 * 9)",
      },
    },
  },
  borderRadius: "5px",

  "& .accordion-title-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
  },

  "& .colored": {
    backgroundColor: "black",
    color: "white",
    "*": {
      backgroundColor: "black",
      color: "white",
    },
  },

  "& button": {
    border: "none",
    backgroundColor: "white",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "5px",
  },

  "& .accordion-list": {
    transition: "all 0.3s ease-in-out",
    overflow: "hidden",
    paddingLeft: "30px",
  },

  "& .visible": {
    maxHeight: "50px",
    padding: "16px",
    paddingLeft: "30px",
  },

  "& .invisible": {
    maxHeight: "0px",
  },
});

export default Accordion;
