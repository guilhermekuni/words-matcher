export enum WORD_TYPE_ENUM {
  COLOR = 'color',
  SPORTS = 'sports',
}

export type WordItemType = {
  id: number;
  label: string;
  type: WORD_TYPE_ENUM;
};
