import { Card } from '$types/card'

export default [
  {
    id: 'e6f90c6e-e52e-45a9-b902-6d0068c2a55b',
    alias: '법카',
    number: ['1231', '1232', '1232', '2131'],
    expireDate: {
      month: '12',
      year: '33',
    },
    holderName: 'KIM',
    cvc: '333',
    password: ['3', '3'],
    company: { name: '로이드 카드', color: '#94dacd' },
  },
  {
    id: 'e823914f-7f9e-4d49-bd07-d9efa18e82c9',
    number: ['1111', '2222', '3333', '4444'],
    expireDate: {
      month: '12',
      year: '33',
    },
    holderName: 'LEE',
    cvc: '333',
    password: ['3', '3'],
    company: { name: '썬 카드', color: '#FBCD58' },
  },
] as Card[]
