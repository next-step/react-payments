import React from 'react'
import ReactDOM from 'react-dom'
import CardListContextProvider from './contexts/cardList'
import RouteContextProvider from './contexts/route'
import Root from './pages'

ReactDOM.render(
  <React.StrictMode>
    <RouteContextProvider>
      <CardListContextProvider>
        <Root />
      </CardListContextProvider>
    </RouteContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
