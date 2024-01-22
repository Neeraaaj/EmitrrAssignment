import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login.tsx'
import SignUp from './components/SignUp.tsx'
import QuizInterface from './components/QuizInterface.tsx'
import HTML from './pages/HTML.tsx'
import CSS from './pages/CSS.tsx'
import JS from './pages/JS.tsx'
import REACT from './pages/REACT.tsx'
import { LeaderboardProvider } from './LeaderboardContext.tsx'
import Leaderboard from './components/Leaderboard.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <LeaderboardProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path={`/Quiz/username`} element={<QuizInterface />} />
        <Route path={`/HTML/username`} element={<HTML />} />
        <Route path={`/CSS/username`} element={<CSS />} />
        <Route path={`/JS/username`} element={<JS/>} />
        <Route path={`/REACT/username`} element={<REACT />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </LeaderboardProvider>
  </Router>,
)
