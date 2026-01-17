import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
// import AgendaPage from './components/AgendaPage'
import RegistrationPage from './components/RegistrationPage'

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    {/* Add more routes here */}
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
