import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="page-content">
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '120px 40px 80px',
                textAlign: 'center',
            }}>
                <div style={{ maxWidth: '560px' }}>
                    <span className="tag" style={{ marginBottom: '24px', display: 'inline-block' }}>404</span>
                    <h1 className="heading-xl" style={{ margin: '24px 0' }}>
                        PAGE NOT
                        <br />
                        <span className="text-gradient">FOUND</span>
                    </h1>
                    <p className="text-secondary" style={{
                        fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                        lineHeight: '1.7',
                        marginBottom: '40px',
                    }}>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/" className="btn btn-primary glow-button">
                            BACK TO HOME
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
