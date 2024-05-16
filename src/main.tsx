import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/theme-context'
import Appbar from './components/appbar/appbar'
import App from './App'
import Details from './pages/details/details'
import Contacts from './pages/contacts/contacts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
