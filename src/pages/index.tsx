import { useState } from 'react'
import { Route, RouteState } from '@common/constants'
import AddPage from './add'
import ListPage from './list'
import AliasPage from './alias'

const Pages: { [key in Route]: (props: any) => JSX.Element } = {
  ADD: AddPage,
  ALIAS: AliasPage,
  LIST: ListPage,
}

const Root = () => {
  const [{ route, payload }, setRoute] = useState<RouteState>({ route: 'ADD' })
  const [cards, setCards] = useState<Set<FormData>>(new Set())
  const Page = Pages[route]

  return (
    <>
      <Page setRoute={setRoute} cards={cards} setCards={setCards} payload={payload} />
      <div id="modalRoot"></div>
    </>
  )
}
export default Root
