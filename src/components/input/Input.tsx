// Utils
type valueOf<T> = T[keyof T];

type ClassNames = string[] | readonly string[];

interface ContainerProps {
  children: React.ReactNode;
}

const Parser = {
  classNames(classNames: ClassNames) {
    return classNames.join(' ');
  },
};

// Constants
const INPUT = {
  TEXT: {
    TYPE: 'text',
  },
  PASSWORD: {
    TYPE: 'password',
  },
} as const;

// Types
type InputType = valueOf<typeof INPUT>['TYPE'];

interface RestProps {
  [key: string]: any;
}

interface DefaultInputProps extends RestProps {
  classNames?: ClassNames;
}

interface InputProps extends DefaultInputProps {
  type: InputType;
}

// Components
const DefaultInput = ({ classNames, ...rest }: DefaultInputProps) => {
  const concatedClassNames = ['input-basic', ...(classNames ?? [])];

  return <input className={Parser.classNames(concatedClassNames)} {...rest} />;
};

const InputFactory = ({ type, ...rest }: InputProps) => {
  const getInput = (inputType: InputType) => {
    switch (inputType) {
      case INPUT.TEXT.TYPE || INPUT.PASSWORD.TYPE: {
        return <DefaultInput type={inputType} {...rest} />;
      }

      default: {
        throw new Error('존재하지 않는 inputType입니다.');
      }
    }
  };

  return getInput(type);
};

const InputBox = ({ children }: ContainerProps) => {
  return <div className='input-box'>{children}</div>;
};

const InputContainer = ({ children }: ContainerProps) => {
  return <div className='input-container'>{children}</div>;
};

// FIXME: DefaultInput에 합치고 props로 받아도 될 것 같긴 한데, 그럼 의존성이 강하게 발생하긴 함.
const InputTitle = ({ children }: ContainerProps) => {
  return <span className='input-title'>{children}</span>;
};

export const Input = Object.assign(InputFactory, {
  Container: InputContainer,
  Title: InputTitle,
  Box: InputBox,
});
