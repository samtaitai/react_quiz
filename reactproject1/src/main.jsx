import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Quiz from './components/Quiz.jsx'
import { QuizProvider } from './contexts/quiz'
//import { initializeApp } from 'firebase/app'
//import { getAnalytics } from 'firebase/analytics'

ReactDOM.createRoot(document.getElementById('root')).render(
    <QuizProvider>
        <Quiz />
    </QuizProvider>,
)
