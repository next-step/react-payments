import Mark from './Mark';

interface ConditionalMark {
  isShow: boolean;
  mark: string | React.ReactElement;
}

export default function ConditionalMark({ isShow, mark }: ConditionalMark) {
  if (!isShow) {
    return null;
  }

  return <Mark mark={mark} />;
}
