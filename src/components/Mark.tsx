interface Mark {
  mark: string | React.ReactElement;
}

export default function Mark({ mark }: Mark) {
  if (typeof mark === 'string') {
    return <span>{mark}</span>;
  }

  return mark;
}
