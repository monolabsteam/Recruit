import React, { useState } from "react";
import Header from "src/components/Header";
import { StackData } from "src/data/Stack";
import { SectionStyle } from "src/styles/Common";
import { styled } from "@stitches/react";

const StackDivStyle = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "50vw",
  paddingLeft: "40px",

  "& p": {
    width: "20%",
  },

  "& div": {
    height: "30px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "10px",
  },

  "& .stack-bar-wrapper": {
    width: "80%",
  },

  "& .stack-bar-fill": {
    backgroundColor: "black",
    color: "white",
  },

  "& .stack-bar-unfill": {
    backgroundColor: "lightgray",
  },
});

const Stack: React.FC = () => {
  return (
    <SectionStyle id="stack">
      <Header>Stack</Header>
      <article>
        {StackData.map((stack) => (
          <StackFragment
            key={`${stack.stack}`}
            stack={stack.stack}
            percent={stack.percent}
          />
        ))}
      </article>
    </SectionStyle>
  );
};

const StackFragment: React.FC<StackFragmentProps> = (props) => {
  const { stack, percent } = props;

  const [isShowPercent, setIsShowPercent] = useState<boolean>(false);

  const onMouseOverStackBar = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsShowPercent(true);
  };

  const onMouseLeaveStackBar = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsShowPercent(false);
  };

  return (
    <StackDivStyle>
      <p>
        <b>{stack}</b>
      </p>
      <div
        className="stack-bar-wrapper"
        onMouseOver={onMouseOverStackBar}
        onMouseLeave={onMouseLeaveStackBar}
      >
        <div className="stack-bar-fill" style={{ width: `${percent}%` }}>
          {isShowPercent && (
            <span>
              <b>...{percent}%</b>
            </span>
          )}
        </div>
        <div
          className="stack-bar-unfill"
          style={{ width: `${100 - +percent}%` }}
        ></div>
      </div>
    </StackDivStyle>
  );
};

interface StackFragmentProps {
  stack: String;
  percent: Number;
}

export default Stack;
