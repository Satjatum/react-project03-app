import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../src/views/LoginPage'
import HomePage from '../src/views/HomePage'
import AboutPage from '../src/views/AboutPage'
import ContactPage from '../src/views/ContactPage'
import RegisterPage from '../src/views/RegisterPage'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
