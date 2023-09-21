import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import { AuthProvider } from './AuthContext'
import PrivateRoute from './PrivateRoute'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }/>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
