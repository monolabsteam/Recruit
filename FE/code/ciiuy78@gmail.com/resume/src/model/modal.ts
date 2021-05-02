export interface IModal {
  title: String;
  period: String;
  percent: Number;
  description?: String;
  positions: String[];
  stacks: String[];
  prize?: String;
}

export interface IProjectKeys {
  HanaData: IModal;
  DSRSData: IModal;
  LIGData: IModal;
  FCData: IModal;
  CCData: IModal;
}

export type TModalTarget = "Hana" | "DSRS" | "LIG" | "FC" | "CC";
