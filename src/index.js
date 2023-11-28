import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
// import { BrowserRouter } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Root"
import ErrorPage from "./Components/ErrorPage"
import Home from "./Components/Home"
import AddDest from "./Components/AddDest"
import Details from "./Components/Details"
import { getAllDestinations as destinationsLoader } from "./Components/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/home',
                element: <Home/>,
                loader: destinationsLoader
            },
            {
                path: '/addDest',
                element: <AddDest/>
            },
            {
                path: '/details/:id',
                element: <Details/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
        {/* <BrowserRouter>
            <App />
        </BrowserRouter> */}
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
