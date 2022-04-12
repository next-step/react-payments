import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useCallback } from 'react'

import { COMPANY_LIST } from '$components/add/CardCompanyModal'
import { Card } from '$types/card'

const initialCardFormState: Card = {
  id: '',
  number: ['', '', '', ''],
  expireDate: { month: '', year: '' },
  holderName: '',
  cvc: '',
  password: ['', ''],
  company: { name: '', color: '' },
}

const CardFormContext = createContext<{
  cardForm: Card
  clearCardForm: () => void
  setNumber: (number: Card['number']) => void
  setExpireDate: (expireDate: Card['expireDate']) => void
  setHolderName: (holderName: Card['holderName']) => void
  setCvc: (cvc: Card['cvc']) => void
  setPassword: (password: Card['password']) => void
  setCompany: (company: Card['company']) => void
} | null>(null)

export const useCardForm = () => {
  const context = useContext(CardFormContext)

  if (!context) {
    throw new Error()
  }

  return context
}

const CardFormContextProvider = ({ children }: { children: ReactNode }) => {
  const [cardForm, setCardForm] = useState<Card>(initialCardFormState)

  const clearCardForm = useCallback(() => {
    setCardForm(initialCardFormState)
  }, [])
  const setNumber = useCallback((number: Card['number']) => {
    setCardForm((prevCardForm) => ({ ...prevCardForm, number }))
  }, [])
  const setExpireDate = useCallback((expireDate: Card['expireDate']) => {
    setCardForm((prevCardForm) => ({ ...prevCardForm, expireDate }))
  }, [])
  const setHolderName = useCallback((holderName: Card['holderName']) => {
    setCardForm((prevCardForm) => ({ ...prevCardForm, holderName }))
  }, [])
  const setCvc = useCallback((cvc: Card['cvc']) => {
    setCardForm((prevCardForm) => ({ ...prevCardForm, cvc }))
  }, [])
  const setPassword = useCallback((password: Card['password']) => {
    setCardForm((prevCardForm) => ({ ...prevCardForm, password }))
  }, [])
  const setCompany = useCallback((company: Card['company']) => {
    setCardForm((prevCardForm) => ({ ...prevCardForm, company }))
  }, [])

  useEffect(() => {
    // 회사 맴대루 정해버리기
    cardForm.number[0].length === 4 &&
      cardForm.number[1].length === 4 &&
      setCompany(COMPANY_LIST[Number(cardForm.number[0] + cardForm.number[1]) % 7])
  }, [cardForm.number, setCompany])

  return (
    <CardFormContext.Provider
      value={{ cardForm, clearCardForm, setNumber, setExpireDate, setHolderName, setCvc, setPassword, setCompany }}
    >
      {children}
    </CardFormContext.Provider>
  )
}

export default CardFormContextProvider
