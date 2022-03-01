import { Component, ErrorInfo, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Section>
          <H1>Sorry.. there a something wrong</H1>
          <button onClick={() => window.location.replace('/')}>Go To Home</button>
        </Section>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

const Section = styled.section`
  text-align: center;
`

const H1 = styled.h1`
  padding: 8px 0;
`
