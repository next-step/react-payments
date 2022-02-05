/* eslint-disable react-hooks/exhaustive-deps */
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
import { CARD } from 'styles/colors'
import { useInput } from 'hooks/useInput'
import { PageProps } from '../../type'
import { limitRangeOfMonthAndYear, limitRangeOfSerialNums } from './helpers'
import * as S from './style'
import { useAppContext } from 'AppContext'
import { validateFormValues, hasCardFormErrors, ERRORS } from './validation'

export default function CardAddPage({ setPage }: PageProps) {
  const { cards, setCards, setEditCardIndex } = useAppContext()
  const [serialNums, setSerialNums] = useState<typeof SERIAL_NUMS>(SERIAL_NUMS)
  const [expiredDate, setExpiredDate] = useState<typeof EXPIRED_DATE>(EXPIRED_DATE)
  const [ownerName, setOwnerName] = useInput()
  const [cvc, setCvc] = useInput()
  const [password, setPassword] = useState<typeof PASSWORD>(PASSWORD)
  const [type, setType] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [errors, setErrors] = useState<typeof ERRORS>(ERRORS)

  useEffect(() => {
    if (Object.keys(CARD).includes(type)) completeFormSubmit()
  }, [type])

  const handleSerialNums = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = limitRangeOfSerialNums(name, value)
    setSerialNums({ ...serialNums, [name]: filteredValue })
    if (errors.serialNumsError) setErrors({ ...errors, serialNumsError: '' })
  }

  const handleExpiredDate = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = limitRangeOfMonthAndYear(name, value)
    setExpiredDate({ ...expiredDate, [name]: filteredValue })
    if (errors.expiredDateError) setErrors({ ...errors, expiredDateError: '' })
  }

  const handlePassword = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [name]: value })
    if (errors.passwordError) setErrors({ ...errors, passwordError: '' })
  }
  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(e)
    if (errors.cvcError) setErrors({ ...errors, cvcError: '' })
  }
  const handleOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerName(e)
    if (errors.ownerNameError) setErrors({ ...errors, ownerNameError: '' })
  }

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
    const _errors = validateFormValues({ serialNums, expiredDate, ownerName, cvc, password })
    if (hasCardFormErrors(_errors)) {
      setErrors(_errors)
      return
    }
    setCards([
      ...cards,
      { type, serialNums, ownerName, expiredDate, nickName: '', id: Math.random().toString(36) },
    ])
    setEditCardIndex(cards.length)
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
          <CardSerialNumsFieldSet
            serialNums={serialNums}
            errorMessage={errors.serialNumsError}
            onChange={handleSerialNums}
          />
          <CardExpiredDateFieldSet
            expiredDate={expiredDate}
            errorMessage={errors.expiredDateError}
            onChange={handleExpiredDate}
          />
          <CardInput
            {...USER_NAME_PROPERTYS}
            value={ownerName}
            onChange={handleOwnerName}
            errorMessage={errors.ownerNameError}
            labelRight={<span>{ownerName.length}/30</span>}
          />
          <S.CardInputCVCBlock>
            <CardInput
              {...CVC_PROPERTYS}
              value={cvc}
              errorMessage={errors.cvcError}
              onChange={handleCVC}
            />
            <S.IconBlock>
              <IconCircleQuestion />
            </S.IconBlock>
          </S.CardInputCVCBlock>
          <CardPasswordFieldSet
            password={password}
            errorMessage={errors.passwordError}
            onChange={handlePassword}
          />

          <S.ButtonBlock>
            <Button type="submit">다음</Button>
          </S.ButtonBlock>
        </S.Form>
      </S.Main>

      <CardModal isOpen={isModalOpen} openModal={setIsModalOpen} selectCard={handleType} />
    </S.Box>
  )
}
