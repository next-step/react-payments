import classNames from 'classnames';

type ChipProps = {
  status: 'small' | 'big' | 'empty';
};
const Chip = ({status}: ChipProps) => <div className={classNames(status === 'big' ? 'big-card__chip' : 'small-card__chip')} />;

export default Chip;
