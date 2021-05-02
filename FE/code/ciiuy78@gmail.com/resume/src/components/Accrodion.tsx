import React, { useRef, useState } from "react";
import { styled } from "@stitches/react";

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

  "& .accordion-list": {
    transition: "max-height 0.5s ease-in-out",
    overflow: "hidden",
  },

  "& .visible": {
    maxHeight: "100px",
  },

  "& .invisible": {
    maxHeight: "0px",
  },
});

const Accordion: React.FC<IArchordionProps> = (props) => {
  const { accordionTitle, accordionDesc } = props;

  const [isShow, setIsShow] = useState<boolean>(false);

  const arcordionListRef = useRef<HTMLDivElement>(null);

  const onClickArcordionBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsShow(isShow ? false : true);
  };

  return (
    <AccordionDivStyle size="md">
      <button type="button" onClick={onClickArcordionBtn}>
        {accordionTitle}
      </button>
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
  return <div className="accordion-list-desc">{accordionDesc}</div>;
};

interface IArchordionListProps {
  accordionDesc?: String;
}

interface IArchordionProps extends IArchordionListProps {
  accordionTitle: String;
}

export default Accordion;
