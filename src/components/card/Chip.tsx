import classNames from 'classnames';

interface ChipProps {
  status: 'small' | 'big' | 'empty';
}
const Chip = ({ status }: ChipProps) => {
  return <div className={classNames(status === 'big' ? 'big-card__chip' : 'small-card__chip')} />;
};

export default Chip;
