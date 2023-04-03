import { Box, Button, Flex, Grid, Modal } from '@/components/UI';

type Props = {
  onClose: () => void;
  onChange?: <T>(value: T) => void;
};

const VirtualKeyboard = ({ onClose, onChange }: Props) => {
  const handleClickNumber = (n: number) => {
    onChange?.(n);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <Grid columns="virtual">
        {shuffleArray(KeyboardNumbers).map((number, i) => {
          return (
            <Flex
              justify="center"
              align="center"
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '$5',
                cursor: 'pointer',
                border: '1px solid $grey1',
                height: '$7',
              }}
              key={i}
              onClick={() => handleClickNumber(number)}
            >
              {number}
            </Flex>
          );
        })}
        <Box />
        <Flex justify="center" align="center" onClick={onClose}>
          <Button
            variant="removeBtn"
            css={{
              fontSize: '30px',
            }}
          />
        </Flex>
      </Grid>
    </Modal>
  );
};

export default VirtualKeyboard;

const KeyboardNumbers = Array.from({ length: 10 }, (_, i) => i);

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
