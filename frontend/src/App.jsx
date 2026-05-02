import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import SupportPage from './pages/SupportPage'
import ProfilePage from './pages/ProfilePage'
import DashboardPage from './pages/DashboardPage'
import MealPlanPage from './pages/MealPlanPage'
import DeliveriesPage from './pages/DeliveriesPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/meal-plans" element={<MealPlanPage />} />
        <Route path="/deliveries" element={<DeliveriesPage />} />
      </Routes>
    </Router>
  )
}


export default App

