import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Quiz from './components/Quiz.jsx'
import { QuizProvider } from './contexts/quiz'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import dotenv from 'dotenv'

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "web-demo-73fdf.firebaseapp.com",
    projectId: "web-demo-73fdf",
    storageBucket: "web-demo-73fdf.appspot.com",
    messagingSenderId: "684337554432",
    appId: "1:684337554432:web:d9ce18154be4e1632fe4e5",
    measurementId: "G-T67WTRV5XQ"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
    <QuizProvider>
        <Quiz />
    </QuizProvider>,
)
