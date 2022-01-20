import AddPage from '@/pages/add'
import AliasPage from '@/pages/alias'
import ListPage from '@/pages/list'
import {
  createContext,
  Dispatch,
  ReactChild,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

export type Route = 'ADD' | 'ALIAS' | 'LIST'

type PageType = (props: any) => JSX.Element

const Pages: { [key in Route]: PageType } = {
  ADD: AddPage,
  ALIAS: AliasPage,
  LIST: ListPage,
}

export const RouteContext = createContext<{
  Page: PageType
  setRoute: Dispatch<SetStateAction<Route>>
}>({
  Page: ListPage,
  setRoute: () => {},
})
export const useRouter = () => useContext(RouteContext)

const RouteContextProvider = ({ children }: { children: ReactChild }) => {
  const [routeKey, setRoute] = useState<Route>('LIST')
  const state = useMemo(
    () => ({
      Page: Pages[routeKey],
      setRoute,
    }),
    [routeKey],
  )

  return <RouteContext.Provider value={state}>{children}</RouteContext.Provider>
}
export default RouteContextProvider
