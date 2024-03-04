import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { CardListPage } from '@/domains/card-list/page'
import { CardRegisterPage } from '@/domains/card-register/page'

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/card-list" />,
  },
  {
    path: '/card-list',
    element: <CardListPage />,
  },
  {
    path: '/card-register',
    element: <CardRegisterPage />,
  },
])

function App() {
  // const [Funnel, step, setStep] = useFunnel('카드 추가')

  return (
    //   <Funnel.Root step={step}>
    //     <Funnel.Step name="선택 화면"></Funnel.Step>
    //     <Funnel.Step name="카드 추가">
    //       카드 추가
    //       <Box as="button" onClick={() => setStep('카드 추가 확인')}>
    //         next
    //       </Box>
    //     </Funnel.Step>
    //     <Funnel.Step name="카드 추가 확인">카드 추가 확인</Funnel.Step>
    //   </Funnel.Root>
    <RouterProvider router={router} />
  )
}

export default App
