import { useState, Fragment } from 'react'
import styled from 'styled-components'
import { CARD } from 'style/colors'
import { CircleDot } from 'components/Icons/Dot'
import Modal from '../Modal'
import * as S from './style'

export default function CardModal({ close }: { close: boolean }) {
  const [isClose, setIsClose] = useState(close)
  return (
    <Modal close={isClose}>
      <S.Background>
        <S.Container>
          <S.Patterns>
            {Object.keys(CARD).map((name, i) => (
              <Fragment key={`${name}-${i}`}>
                <S.Pattern>
                  <CircleDot width={36} height={36} bgColor={CARD[name]} />
                  <S.Name>{name} 카드</S.Name>
                </S.Pattern>
              </Fragment>
            ))}
          </S.Patterns>
        </S.Container>
        <button onClick={() => setIsClose(true)}>close</button>
      </S.Background>
    </Modal>
  )
}
