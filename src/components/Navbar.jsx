import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
    { path: '/research', label: 'RESEARCH' },
    { path: '/samples', label: 'SAMPLES' },
    { path: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    useEffect(() => {
        if (!menuOpen) return
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false)
        }
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [menuOpen])

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-text">KYXD</span>
                </Link>

                <div
                    className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
                    onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false) }}
                >
                    {NAV_LINKS.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                <div className="navbar__actions">
                    <Link to="/contact" className="btn btn-primary glow-button navbar__cta">
                        BOOK A CALL
                    </Link>
                    <button
                        className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </nav>
    )
}
