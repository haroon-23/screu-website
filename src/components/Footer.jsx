import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__glow" />
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">KYXD</Link>
                        <p className="footer__tagline">Training Data for Physical AI</p>
                    </div>
                    <div className="footer__columns">
                        <div className="footer__col">
                            <h4 className="footer__col-title">Company</h4>
                            <Link to="/samples" className="footer__link">Samples</Link>
                            <Link to="/research" className="footer__link">Research</Link>
                            <Link to="/contact" className="footer__link">Contact</Link>
                        </div>
                        <div className="footer__col">
                            <h4 className="footer__col-title">Connect</h4>
                            <a href="mailto:syedharoon071@gmail.com" className="footer__link">
                                syedharoon071@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__copy">© {new Date().getFullYear()} KYXD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
