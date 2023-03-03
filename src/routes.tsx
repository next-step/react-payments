import { CardAdd, CardCompleted, CardList } from '@/pages'

import CardUpdate from './pages/card-update/CardUpdate'

const routes = [
  { path: '/', element: <CardList /> },
  { path: '/card-add', element: <CardAdd /> },
  { path: '/card-completed', element: <CardCompleted /> },
  { path: '/card-update', element: <CardUpdate /> },
]

export default routes
