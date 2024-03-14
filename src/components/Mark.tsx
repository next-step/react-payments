interface Mark {
  isShow?: boolean;
  mark: string | React.ReactElement;
}

export default function Mark({ isShow, mark }: Mark) {
  if (!isShow) {
    return null;
  }

  if (typeof mark === 'string') {
    return <span>{mark}</span>;
  }

  return mark;
}
