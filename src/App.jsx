import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginScreen from './pages/Login/LoginScreen'
import ProdutimeHome from './pages/Home/ProdutimeHome'
import CreateAccount from './pages/CreateAccount/CreateAccount'

function App() {


  return (
    <>
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element = {<LoginScreen/>}/>
          <Route path='/home' element = {<ProdutimeHome/>}/>
          <Route  path='/createAccount' element = {<CreateAccount/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
