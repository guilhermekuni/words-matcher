import { YStack, H4, Button } from 'tamagui';

type WordType = {
  label: string;
  type: string;
};

export const Word = ({ label, type }: WordType) => {
  return <Button>{label}</Button>;
};
