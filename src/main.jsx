import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import App from './App.jsx'
import AutoIncrementCounter from './Auto-Increment-Counter/Auto-Increment-Counter'
import Autocomplete from './Autocomplete/Autocomplete'
import CustomSyntheticEventComponent from './CustomSyntheticEvent/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/accordion',
        element: <App />
      },
      {
        path: '/auto-increment-counter',
        element: <AutoIncrementCounter />
      },
      {
        path:'/auto-complete',
        element: <Autocomplete />
      },
      {
        path: '/custom-synthetic-event',
        element: <CustomSyntheticEventComponent />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
