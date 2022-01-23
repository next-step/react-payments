import React, { useState, useEffect } from 'react'
import { Button } from 'components/Button'
import { DigitalCard } from 'components/Card'
import {
  CardPasswordFieldSet,
  CardSerialNumsFieldSet,
  CardExpiredDateFieldSet,
} from 'components/Form/FieldSet'
import { CardInput } from 'components/Form/Input'
import { CardModal } from 'components/Modal'
import { IconCircleQuestion, IconLeftArrow } from 'components/svgs'
import { PAGES } from '../../constants'
import {
  SERIAL_NUMS,
  PASSWORD,
  EXPIRED_DATE,
  USER_NAME_PROPERTYS,
  CVC_PROPERTYS,
} from './constants'
import { CARD } from 'style/colors'
import { useFieldSet, useInput } from './hooks'
import { PageProps } from '../../type'
import * as S from './style'

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

      <S.Main>
        <S.DigitalCardBlock>
          <DigitalCard
            type={type}
            serialNums={serialNums}
            ownerName={ownerName}
            expiredDate={expiredDate}
          />
        </S.DigitalCardBlock>

        <S.Form onSubmit={handleSubmit}>
          <CardSerialNumsFieldSet serialNums={serialNums} onChange={setSerialNums} />
          <CardExpiredDateFieldSet expiredDate={expiredDate} onChange={setExpiredDate} />
          <CardInput
            {...USER_NAME_PROPERTYS}
            value={ownerName}
            onChange={setOwnerName}
            labelRight={<span>{ownerName.length}/30</span>}
          />
          <S.CardInputCVCBlock>
            <CardInput {...CVC_PROPERTYS} value={cvc} onChange={setCvc} />
            <S.IconBlock>
              <IconCircleQuestion />
            </S.IconBlock>
          </S.CardInputCVCBlock>
          <CardPasswordFieldSet password={password} onChange={setPassword} />

          <S.ButtonBlock>
            <Button type="submit">다음</Button>
          </S.ButtonBlock>
        </S.Form>
      </S.Main>

      <CardModal isOpen={isModalOpen} openModal={setIsModalOpen} selectCard={handleType} />
    </S.Box>
  )
}
