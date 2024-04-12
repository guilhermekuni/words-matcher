import { Stack } from 'expo-router';
import { useState, useCallback } from 'react';
import { XStack, H2 } from 'tamagui';

import { Container } from '~/components/Container';
import { Word } from '~/components/Word';
import { WordItemType, WORD_TYPE_ENUM } from '~/utils/gameTypes';
import { shuffleWords } from '~/utils/gameUtils';

const wordsMock: WordItemType[] = [
  { id: 1, label: 'Blue', type: WORD_TYPE_ENUM.COLOR },
  { id: 2, label: 'Red', type: WORD_TYPE_ENUM.COLOR },
  { id: 3, label: 'Pink', type: WORD_TYPE_ENUM.COLOR },
  { id: 4, label: 'Purple', type: WORD_TYPE_ENUM.COLOR },
  { id: 5, label: 'Soccer', type: WORD_TYPE_ENUM.SPORTS },
  { id: 6, label: 'Basketball', type: WORD_TYPE_ENUM.SPORTS },
  { id: 7, label: 'Baseball', type: WORD_TYPE_ENUM.SPORTS },
  { id: 8, label: 'Golf', type: WORD_TYPE_ENUM.SPORTS },
];

const randomizedWords = shuffleWords(wordsMock);

const WORDS_TO_MATCH = 2;

export default function Game() {
  const [score, setScore] = useState<number>(0);
  const [currentWords, setCurrentWords] = useState<WordItemType[]>(randomizedWords);
  const [selectedWords, setSelectedWords] = useState<WordItemType[]>([]);

  const handleWordSelect = useCallback(
    (newWord: WordItemType) => {
      const updatedSelectedWords = [...selectedWords, newWord];

      if (updatedSelectedWords.length === WORDS_TO_MATCH) {
        const [firstWord, secondWord] = updatedSelectedWords;

        const isMatch = firstWord.type === secondWord.type && firstWord.id !== secondWord.id;

        if (isMatch) {
          setScore(score + 1);

          const remainingWords = currentWords.filter(
            (item) => item.id !== firstWord.id && item.id !== secondWord.id
          );

          setCurrentWords(remainingWords);
        }

        setSelectedWords([]);

        return;
      }

      setSelectedWords(updatedSelectedWords);
    },
    [selectedWords, setSelectedWords]
  );

  return (
    <>
      <Stack.Screen options={{ title: 'Game' }} />
      <Container>
        <H2 color="#000" mb="$4">
          Score: {score}
        </H2>
        <XStack gap="$2" flexWrap="wrap">
          {currentWords.map(({ id, label, type }) => (
            <Word
              key={id}
              id={id}
              label={label}
              type={type}
              isSelected={selectedWords.some((item) => item.id === id)}
              onPress={handleWordSelect}
            />
          ))}
        </XStack>
      </Container>
    </>
  );
}
