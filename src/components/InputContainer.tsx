interface InputContainer {
  inputTitle: string | React.ReactElement;
  children: React.ReactElement;
}

export default function InputContainer({ inputTitle, children }: InputContainer) {
  const InputTitle = typeof inputTitle === 'string' ? <span className="input-title">{inputTitle}</span> : inputTitle;

  return (
    <div className="input-container">
      {InputTitle}
      {children}
    </div>
  );
}
