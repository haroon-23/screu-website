import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const Research = lazy(() => import('./pages/Research'))
const Samples = lazy(() => import('./pages/Samples'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <Suspense fallback={
                    <div style={{
                        minHeight: '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <div className="loading-spinner" />
                    </div>
                }>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/samples" element={<Samples />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </>
    )
}
