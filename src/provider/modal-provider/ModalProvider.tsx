import FlexCenter from '@/components/common/flex-center/FlexCenter';
import Modal from '@/components/common/modal/Modal';
import ModalItemContainer from '@/components/common/modal/parts/ModalItemContainer';
import ModalItemDot from '@/components/common/modal/parts/ModalItemDot';
import ModalItemName from '@/components/common/modal/parts/ModalItemName';
import { CARD_COMPANY_LIST } from '@/domain/cardItem';
import { CardBrand } from '@/domain/type';

import { PropsWithChildren, createContext, useState } from 'react';

interface ModalType {
  cardBrand: CardBrand;
  toggle: () => void;
  resetCardBrand: () => void;
}

const initialContext: ModalType = {
  cardBrand: { cardBrandName: '', color: '', pattern: [] },
  toggle: () => undefined,
  resetCardBrand: () => undefined,
};

const initialState = {
  cardBrandName: '',
  color: '',
  pattern: [],
};
export const ModalContext = createContext(initialContext);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardBrand, setCardBrand] = useState({} as CardBrand);

  const toggle = () => setIsOpen(!isOpen);

  const clickCardDot = ({ cardBrandName, color, pattern }: CardBrand) => {
    setCardBrand({ cardBrandName, color, pattern });
    toggle();
  };
  const resetCardBrand = () => {
    setCardBrand(initialState);
  };
  return (
    <ModalContext.Provider value={{ cardBrand, toggle, resetCardBrand }}>
      {children}
      <Modal onToggle={toggle} isOpen={isOpen}>
        {CARD_COMPANY_LIST.map((item, i) => (
          <FlexCenter key={i}>
            {item.map(({ cardBrandName, color, pattern }, i) => (
              <ModalItemContainer key={`${cardBrandName}_${i}`}>
                <ModalItemDot
                  style={{ backgroundColor: color }}
                  onClick={() => clickCardDot({ cardBrandName, color, pattern })}
                />
                <ModalItemName name={cardBrandName} />
              </ModalItemContainer>
            ))}
          </FlexCenter>
        ))}
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
