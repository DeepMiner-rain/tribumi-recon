import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { VehicleCatalog } from './components/pages/VehicleCatalog';
import { VehicleDetails } from './components/pages/VehicleDetails';
import { CostCalculator } from './components/pages/CostCalculator';
import { LoanCalculator } from './components/pages/LoanCalculator';
import { UserDashboard } from './components/pages/UserDashboard';
import { AboutUs } from './components/pages/AboutUs';
import { ContactUs } from './components/pages/ContactUs';
import { FAQPage } from './components/pages/FAQPage';
import { Discovery } from './components/pages/Discovery';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/vehicles" element={<VehicleCatalog />} />
                <Route path="/vehicle/:id" element={<VehicleDetails />} />
                <Route path="/calculator" element={<CostCalculator />} />
                <Route path="/loan-calculator" element={<LoanCalculator />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/discovery" element={<Discovery />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}