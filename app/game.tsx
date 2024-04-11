import { Stack } from 'expo-router';
import { XStack } from 'tamagui';

import { Container } from '~/components/Container';
import { Word } from '~/components/Word';

enum WORD_TYPE {
  COLOR = 'color',
  SPORTS = 'sports',
}

const wordsMock = [
  { id: 1, label: 'Blue', type: WORD_TYPE.COLOR },
  { id: 2, label: 'Red', type: WORD_TYPE.COLOR },
  { id: 3, label: 'Soccer', type: WORD_TYPE.SPORTS },
  { id: 4, label: 'Basketball', type: WORD_TYPE.SPORTS },
  { id: 5, label: 'Pink', type: WORD_TYPE.COLOR },
];

export default function Game() {
  return (
    <>
      <Stack.Screen options={{ title: 'Game' }} />
      <Container>
        <XStack gap="$2" flexWrap="wrap">
          {wordsMock.map(({ id, label, type }) => (
            <Word key={id} label={label} type={type} />
          ))}
        </XStack>
      </Container>
    </>
  );
}
