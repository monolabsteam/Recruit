import { IModal, IProjectKeys } from "../model/modal";

const HanaData: IModal = {
  title: "HanaBank Annotator & Admin",
  period: "2020.12.23. ~ 2021.03.05.",
  percent: 35,
  positions: ["Web Develop"],
  stacks: ["React", "MobX", "Typescript"],
};
const DSRSData: IModal = {
  title: "Doosan Mecatech DSRS",
  period: "2020.09.09 ~ 2020.12.24.",
  percent: 50,
  positions: ["Web Develop"],
  stacks: ["React", "MobX", "Typescript", "Flask", "SQLAlchemy"],
};
const LIGData: IModal = {
  title: "Let It Go",
  period: "2020.05. ~ 2020.06.",
  percent: 55,
  description: "레고 통합 관리 사이트",
  positions: ["Web Develop"],
  stacks: ["Vue", "VueX"],
  prize: "SSAFY 전국 3등",
};
const FCData: IModal = {
  title: "Food Curation",
  period: "2020.03. ~ 2020.04.",
  percent: 60,
  description: "음식점 추천 사이트",
  positions: ["Web Develop, Word Cloud (TF-IDF)"],
  stacks: ["Vue", "VueX", "Python"],
  prize: "SSAFY 구미 1등",
};
const CCData: IModal = {
  title: "Code Coworker",
  period: "2020.01. ~ 2020.02.",
  percent: 35,
  description: "개발자를 위한 코드 공유 사이트",
  positions: ["Web Develop"],
  stacks: ["Vue", "VueX"],
  prize: "SSAFY 구미 3등",
};

const DataSet: IProjectKeys = {
  HanaData: HanaData,
  DSRSData: DSRSData,
  LIGData: LIGData,
  FCData: FCData,
  CCData: CCData,
};

export { HanaData, DSRSData, LIGData, FCData, CCData, DataSet };
