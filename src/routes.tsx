import { CardAdd, CardCompleted, CardList } from '@/pages'
const routes = [
  { path: '/', element: <CardList /> },
  { path: '/card-add', element: <CardAdd /> },
  { path: '/card-completed', element: <CardCompleted /> },
]

export default routes
