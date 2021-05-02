export interface IModal {
  title: String;
  period: String;
  percent: Number;
  description?: String;
  positions: String[];
  stacks: String[];
  prize?: String;
  link?: String;
}

export interface ISimpleProject {
  title: String;
  short: String;
}

export interface IProjectKeys {
  Hana: IModal;
  DSRS: IModal;
  LIG: IModal;
  FC: IModal;
  CC: IModal;
}

export type TModalTarget = "Hana" | "DSRS" | "LIG" | "FC" | "CC";
