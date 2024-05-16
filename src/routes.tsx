import App from './App'
import { createBrowserRouter } from 'react-router-dom'
import Contacts from './pages/contacts/contacts'
import Details from './pages/details/details'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/details',
    element: <Details />,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
])
