import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import {StepperProvider} from "./context/StepperContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StepperProvider>
            <App/>
        </StepperProvider>
    </React.StrictMode>,
)
