interface ButtonBoxProps {
  additionalClassNames?: '' | 'mt-50'
  text?: '다음' | '이전'
}

const ButtonBox = ({
  additionalClassNames = '',
  text = '다음',
}: ButtonBoxProps) => {
  return (
    <div className={`button-box ${additionalClassNames}`}>
      <span className="button-text">{text}</span>
    </div>
  )
}

export default ButtonBox
