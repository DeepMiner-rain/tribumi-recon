import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Vehicles from './components/pages/Vehicles'
import Discovery from './components/pages/Discovery'
import Calculator from './components/pages/Calculator'
import LoanCalculator from './components/pages/LoanCalculator'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import FAQ from './components/pages/FAQ'
import Dashboard from './components/pages/Dashboard'
import { Toaster } from 'sonner'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/discovery" element={<Discovery />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/loan-calculator" element={<LoanCalculator />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-right" theme="dark" />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App