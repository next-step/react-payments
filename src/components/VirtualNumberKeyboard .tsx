import { shuffle } from '../utils';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const VirtualNumberKeyboard = () => {
  const shuffledNumbers = shuffle(numbers);

  return (
    <div className="number-keyboard">
      {shuffledNumbers.map((number) => (
        <button key={number} className="number-button">
          {number}
        </button>
      ))}
    </div>
  );
};

export default VirtualNumberKeyboard;
