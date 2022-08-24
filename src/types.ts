
export enum Te { Guu = 0, Choki, Paa};
export enum Jjudgment { Draw = 0, Win, Lose };

export type ScoreType = {
  human: Te;
  computer: Te;
  judgment: Jjudgment;
};
