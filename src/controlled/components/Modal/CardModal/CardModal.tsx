import { Fragment } from 'react'
import { CARD } from 'controlled/styles/colors'
import { CircleDot } from 'controlled/components/Icons/Dot'
import Modal from '../Modal'
import * as S from './style'
import { Button } from 'controlled/components/Button'

interface Props {
  isOpen: boolean
  openModal: React.Dispatch<React.SetStateAction<boolean>>
  selectCard?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function CardModal({ isOpen, openModal, selectCard }: Props) {
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
          <S.Wrapper>
            <Button onClick={() => openModal(false)}>닫기</Button>
          </S.Wrapper>
        </S.Container>
      </S.Background>
    </Modal>
  )
}
