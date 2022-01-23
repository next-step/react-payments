import React, { useState, useEffect } from 'react'
import { Button } from 'components/Button'
import { BlankCard, DigitalCard } from 'components/Card'
import {
  CardPasswordFieldSet,
  CardSerialNumsFieldSet,
  CardExpiredDateFieldSet,
} from 'components/Form/FieldSet'
import { CardInput } from 'components/Form/Input'
import { CardModal } from 'components/Modal'
import { IconCircleQuestion, IconLeftArrow } from 'components/svgs'
import { PAGES } from '../../constants'
import { SERIAL_NUMS, PASSWORD, EXPIRED_DATE } from './constants'
import { CARD } from 'style/colors'
import * as S from './style'
import { PageProps } from '../../type'
import { useFieldSet, useInput } from './hooks'

type ReactInputEvent = React.ChangeEvent<HTMLInputElement>

export default function CardAddPage({ cards, setPage, setCards }: PageProps) {
  const [serialNums, setSerialNums] = useFieldSet(SERIAL_NUMS)
  const [expiredDate, setExpiredDate] = useFieldSet(EXPIRED_DATE)
  const [ownerName, setOwnerName] = useInput()
  const [cvc, setCvc] = useInput()
  const [password, setPassword] = useFieldSet(PASSWORD)
  const [type, setType] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (Object.keys(CARD).includes(type)) completeFormSubmit()
  }, [type])

  //prettier-ignore
  const handleType = ({ target }: React.MouseEvent<HTMLDivElement>) => {
    const { parentNode } = target as HTMLDivElement
    const { dataset: { name }} = parentNode as HTMLDataElement
    if (name) {
      setType(name)
      setIsModalOpen(false)
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!type) {
      setIsModalOpen(true)
      return
    }
    completeFormSubmit()
  }
  const completeFormSubmit = () => {
    setCards([...cards, { type, serialNums, ownerName, expiredDate, nickName: '' }])
    setPage(PAGES.CARD_ADD_COMPLETE)
  }

  return (
    <S.Box>
      <S.Header>
        <Button onClick={() => setPage(PAGES.CARD_LIST)}>
          <IconLeftArrow />
        </Button>
        <S.H1>카드 추가</S.H1>
      </S.Header>

      <S.FlexRowCenter>
        <DigitalCard
          type={type}
          serialNums={serialNums}
          ownerName={ownerName}
          expiredDate={expiredDate}
        />
      </S.FlexRowCenter>

      <S.Form onSubmit={handleSubmit}>
        <CardSerialNumsFieldSet serialNums={serialNums} onChange={setSerialNums} />
        <CardExpiredDateFieldSet expiredDate={expiredDate} onChange={setExpiredDate} />
        <CardInput
          labelName="카드 소유자 이름(선택)"
          id="userName"
          name="userName"
          type="text"
          value={ownerName}
          onChange={setOwnerName}
          labelRight={<span>{ownerName.length}/30</span>}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={30}
          required
        />
        <S.FlexRowAlignCenter>
          <CardInput
            labelName="보안 코드(CVC/CVV)"
            id="cvc"
            name="cvc"
            type="password"
            value={cvc}
            onChange={setCvc}
            maxLength={3}
            required
          />
          <S.IconWrapper>
            <IconCircleQuestion />
          </S.IconWrapper>
        </S.FlexRowAlignCenter>
        <CardPasswordFieldSet password={password} onChange={setPassword} />

        <S.ButtonWrapper>
          <Button type="submit">다음</Button>
        </S.ButtonWrapper>
      </S.Form>
      <CardModal isOpen={isModalOpen} openModal={setIsModalOpen} selectCard={handleType} />
    </S.Box>
  )
}
