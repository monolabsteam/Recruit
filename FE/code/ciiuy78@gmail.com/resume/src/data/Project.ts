import { IModal, IProjectKeys, ISimpleProject } from "../model/modal";

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
  link: "https://github.com/hopehappy92/LET-IT-GO",
};
const FCData: IModal = {
  title: "Food Curation",
  period: "2020.03. ~ 2020.04.",
  percent: 60,
  description: "음식점 추천 사이트",
  positions: ["Web Develop, Word Cloud (TF-IDF)"],
  stacks: ["Vue", "VueX", "Python"],
  prize: "SSAFY 구미 1등",
  link: "https://github.com/hopehappy92/FoodCuration",
};
const CCData: IModal = {
  title: "Code Coworker",
  period: "2020.01. ~ 2020.02.",
  percent: 35,
  description: "개발자를 위한 코드 공유 사이트",
  positions: ["Web Develop"],
  stacks: ["Vue", "VueX"],
  prize: "SSAFY 구미 3등",
  link: "https://github.com/hopehappy92/CodeCowokers",
};

const DataSet: IProjectKeys = {
  Hana: HanaData,
  DSRS: DSRSData,
  LIG: LIGData,
  FC: FCData,
  CC: CCData,
};

const simpleDataSet: ISimpleProject[] = [
  {
    title: "HanaBank Annotator & Admin",
    short: "Hana",
  },
  {
    title: "Doosan Mecatech DSRS",
    short: "DSRS",
  },
  {
    title: "Let It Go",
    short: "LIG",
  },
  {
    title: "Food Curation",
    short: "FC",
  },
  {
    title: "Code Coworker",
    short: "CC",
  },
];

export { HanaData, DSRSData, LIGData, FCData, CCData, DataSet, simpleDataSet };
