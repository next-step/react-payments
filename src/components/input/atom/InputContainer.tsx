import { INPUT } from '../input.constant';

export const InputContainer = ({ children }: React.PropsWithChildren) => {
  return <div className={`${INPUT.CLASSNAME.CONTAINER}`}>{children}</div>;
};
