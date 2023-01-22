import {
  createContext,
  FormEvent,
  FormEventHandler,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  ICardDTO,
  isValidCardData,
  isValidExpiryDateBy,
  TInvalidCode,
} from "../../../domain";

interface ICardFormContext {
  cardState: ICardDTO;
  changeCardState: (cardState: ICardDTO) => void;
  isValidExpiryDate: () => boolean;
}

interface IProps {
  children: (
    cardState: ICardDTO,
    onSubmit: FormEventHandler<HTMLFormElement>
  ) => ReactNode;
}

const initValue: ICardFormContext = {
  cardState: {},
  changeCardState: () => null,
  isValidExpiryDate: () => false,
};

export const CardFormContext = createContext(initValue);

const MESSAGE_MAP: Record<TInvalidCode, string> = {
  InvalidCardNumbers: "카드 번호가 유효하지 않습니다.",
  InvalidExpiryDate: "카드 만료일이 유효하지 않습니다.",
  InvalidSecurityCode: "보안 코드가 유효하지 않습니다.",
  InvalidOwner: "카드 소유자 이름을 입력해주세요.",
  InvalidPassword: "카드 비밀번호를 입력해주세요.",
};

export default function CardFormProvider({ children }: IProps) {
  const [cardState, setCardState] = useState<ICardDTO>({});
  const changeCardState = useCallback((newCardState: ICardDTO) => {
    setCardState((cardState) => ({
      ...cardState,
      ...newCardState,
    }));
  }, []);

  const isValidExpiryDate = useCallback(() => {
    return isValidExpiryDateBy(cardState.expiredYear, cardState.expiredMonth);
  }, [cardState.expiredMonth, cardState.expiredYear]);

  const contextValue = useMemo(
    () => ({ cardState, changeCardState, isValidExpiryDate }),
    [cardState, changeCardState, isValidExpiryDate]
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const invalidCodes = isValidCardData(cardState);
      if (invalidCodes.length > 0) {
        alert(invalidCodes.map((key) => MESSAGE_MAP[key]).join("\n"));
      } else {
        alert("카드가 등록되었습니다.");
      }
    },
    [cardState]
  );

  return (
    <CardFormContext.Provider value={contextValue}>
      {children(cardState, handleSubmit)}
    </CardFormContext.Provider>
  );
}
