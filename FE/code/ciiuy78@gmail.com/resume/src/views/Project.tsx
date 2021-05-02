import React, { useCallback, useState } from "react";
import Modal from "src/components/modal";
import Header from "src/components/Header";
import { TModalTarget, IProjectKeys } from "src/model/modal";
import { DataSet } from "src/data/Project";
import { SectionStyle, ButtonStyle } from "src/styles/Common";
import { styled } from "@stitches/react";

const ButtonWrapperDivStyle = styled("div", {
  width: "50vw",
});

const Project: React.FC = () => {
  const [title, setTitle] = useState<String>("");
  const [period, setPeriod] = useState<String>("");
  const [percent, setPercent] = useState<Number>(0);
  const [description, setDescription] = useState<String | undefined>();
  const [positions, setPositions] = useState<String[]>([]);
  const [stacks, setStacks] = useState<String[]>([]);
  const [prize, setPrize] = useState<String | undefined>();
  const [showTarget, setShowTarget] = useState<String>("");

  const setData = useCallback((target: TModalTarget) => {
    const key: keyof IProjectKeys = (target + "Data") as keyof IProjectKeys;

    setTitle(DataSet[key].title);
    setPeriod(DataSet[key].period);
    setPercent(DataSet[key].percent);
    setDescription(DataSet[key].description);
    setPositions(DataSet[key].positions);
    setStacks(DataSet[key].stacks);
    setPrize(DataSet[key].prize);
  }, []);

  const onClickModalOpen = (target: TModalTarget) => {
    setData(target);
    setShowTarget(target);
  };

  return (
    <SectionStyle id="project">
      <Header>Project</Header>
      <article>
        <ul>
          <ButtonWrapperDivStyle>
            <ButtonStyle type="button" onClick={() => onClickModalOpen("Hana")}>
              {"HanaBank Annotator & Admin"}
            </ButtonStyle>
          </ButtonWrapperDivStyle>
        </ul>
        <ul>
          <ButtonWrapperDivStyle>
            <ButtonStyle type="button" onClick={() => onClickModalOpen("DSRS")}>
              {"Doosan Mecatech DSRS"}
            </ButtonStyle>
          </ButtonWrapperDivStyle>
        </ul>
        <ul>
          <ButtonWrapperDivStyle>
            <ButtonStyle type="button" onClick={() => onClickModalOpen("LIG")}>
              {"Let It Go"}
            </ButtonStyle>
          </ButtonWrapperDivStyle>
        </ul>
        <ul>
          <ButtonWrapperDivStyle>
            <ButtonStyle type="button" onClick={() => onClickModalOpen("FC")}>
              {"Food Curation"}
            </ButtonStyle>
          </ButtonWrapperDivStyle>
        </ul>
        <ul>
          <ButtonWrapperDivStyle>
            <ButtonStyle type="button" onClick={() => onClickModalOpen("CC")}>
              {"Code Coworker"}
            </ButtonStyle>
          </ButtonWrapperDivStyle>
        </ul>
      </article>
      <Modal
        title={title}
        period={period}
        percent={percent}
        description={description}
        positions={positions}
        stacks={stacks}
        prize={prize}
        showTarget={showTarget}
        setShowTarget={setShowTarget}
      />
    </SectionStyle>
  );
};

export default Project;
