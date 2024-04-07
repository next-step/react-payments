import { FlexCenter, Modal } from '@/components/common';
import ModalItemContainer from '@/components/common/modal/parts/ModalItemContainer';
import ModalItemDot from '@/components/common/modal/parts/ModalItemDot';
import ModalItemName from '@/components/common/modal/parts/ModalItemName';
import { CARD_COMPANY_LIST } from '@/domain/cardItem';
import { type CardBrand } from '@/domain/type';

import { createContext, type PropsWithChildren } from 'react';
import useCardBrand from './hooks/useCardBrand';
import useToggle from './hooks/useToggle';

type ModalType = {
  cardBrand: CardBrand;
  toggle: () => void;
  resetCardBrand: () => void;
};

const initialContext: ModalType = {
  cardBrand: { cardBrandName: '', color: '', pattern: [] },
  toggle: () => undefined,
  resetCardBrand: () => undefined,
};

export const ModalContext = createContext(initialContext);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, toggle } = useToggle();
  const { cardBrand, handleCardBrand, resetCardBrand } = useCardBrand();

  const clickCardDot = ({ cardBrandName, color, pattern }: CardBrand) => {
    handleCardBrand({ cardBrandName, color, pattern });
    toggle();
  };

  return (
    <ModalContext.Provider value={{ cardBrand, toggle, resetCardBrand }}>
      {children}
      {isOpen && (
        <Modal onToggle={toggle} isOpen={isOpen}>
          {CARD_COMPANY_LIST.map((item, i) => (
            <FlexCenter key={i}>
              {item.map(({ cardBrandName, color, pattern }, i) => (
                <ModalItemContainer key={`${cardBrandName}_${i}`}>
                  <ModalItemDot
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      clickCardDot({ cardBrandName, color, pattern });
                    }}
                  />
                  <ModalItemName name={cardBrandName} />
                </ModalItemContainer>
              ))}
            </FlexCenter>
          ))}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
