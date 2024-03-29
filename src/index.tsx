import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from "./pages/App";
import QuestionReponses from "./pages/QuestionsReponses";
import Score from "./pages/Score";


import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import './index.css'



const router = createBrowserRouter([
    {
        path: '/qcmreactjs',
        element: <App/>,
    },
    {
        path: '/QuestionReponses/:displayedText',
        element: <QuestionReponses/>,


    },
    {
        path: '/Findejeu/:displayedText',
        element: <Score/>,

    }
])


ReactDOM.createRoot((document.getElementById('root')!)).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()