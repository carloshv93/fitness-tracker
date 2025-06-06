import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ExerciseProvider} from "./context/ExerciseContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ExerciseProvider>
            <App/>
        </ExerciseProvider>
    </StrictMode>,
)
