import { useRouter } from '@/contexts/route'

const Root = () => {
  const { Page } = useRouter()
  return (
    <>
      <Page />
      <div id="modalRoot"></div>
    </>
  )
}

export default Root
