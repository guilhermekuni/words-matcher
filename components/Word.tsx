import { Button } from 'tamagui';

import { WordItemType, WORD_TYPE_ENUM } from '~/utils/gameTypes';

type WordType = {
  id: number;
  label: string;
  type: WORD_TYPE_ENUM;
  isSelected: boolean;
  onPress: (word: WordItemType) => void;
};

export const Word = ({ id, label, isSelected, type, onPress }: WordType) => {
  const bgColor = isSelected ? '$color.yellow8Light' : '$color.gray7Light';
  const textColor = isSelected ? '#fff' : '#000';

  const handlePress = () => {
    onPress({ id, label, type });
  };

  return (
    <Button
      backgroundColor={bgColor}
      color={textColor}
      onPress={handlePress}
      pressStyle={{ backgroundColor: '$color.yellow12Dark' }}>
      {label}
    </Button>
  );
};
