import { CardAdd, CardCompleted, CardList, CardUpdate } from '@/pages'

const routes = [
  { path: '/', element: <CardList /> },
  { path: '/card-add', element: <CardAdd /> },
  { path: '/card-completed', element: <CardCompleted /> },
  { path: '/card-update', element: <CardUpdate /> },
]

export default routes
