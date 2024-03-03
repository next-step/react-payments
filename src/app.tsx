import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { CardListPage } from '@/pages/card-list-page'

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/cards" />,
  },
  {
    path: '/cards',
    element: <CardListPage />,
  },
  {
    path: '/card-register',
    element: <>add-cards</>,
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
