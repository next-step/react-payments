import React, { useState } from 'react'
import * as S from './style'
import CardAddPage from './pages/CardAddPage'
import CardListPage from './pages/CardListPage'
import { PageProps } from 'type'

function App() {
  const [page, setPage] = useState(PAGES.CARD_LIST)
  return (
    <S.Root>
      <S.App>{cardPages[page]({ setPage })}</S.App>
    </S.Root>
  )
}

const PAGES = {
  CARD_LIST: 'CardListPage',
  CARD_ADD: 'CardAddPage',
}

const cardPages = {
  [PAGES.CARD_ADD]: (props: PageProps) => <CardAddPage {...props} />,
  [PAGES.CARD_LIST]: (props: PageProps) => <CardListPage {...props} />,
}

export default App
