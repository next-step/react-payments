import { useState, Fragment } from 'react'
import { CARD } from 'style/colors'
import { CircleDot } from 'components/Icons/Dot'
import Modal from '../Modal'
import * as S from './style'

interface Props {
  isOpen: boolean
  openModal: React.Dispatch<React.SetStateAction<boolean>>
  selectCard?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function CardModal({ isOpen, openModal, selectCard }: Props) {
  // const [isClose, setIsClose] = useState(close)

  return (
    <Modal isOpen={isOpen}>
      <S.Background>
        <S.Container>
          <S.Patterns onClick={selectCard}>
            {Object.keys(CARD).map((name, i) => (
              <Fragment key={`${name}-${i}`}>
                <S.Pattern data-name={name}>
                  <CircleDot width={36} height={36} bgColor={CARD[name]} />
                  <S.Name>{name} 카드</S.Name>
                </S.Pattern>
              </Fragment>
            ))}
          </S.Patterns>
        </S.Container>
        <button onClick={() => openModal(false)}>close</button>
      </S.Background>
    </Modal>
  )
}
