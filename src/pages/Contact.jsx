import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Contact.css'

export default function Contact() {
    useEffect(() => {
        // Cal.com embed via script injection
        if (window.Cal) return // Already loaded

            ; (function (C, A, L) {
                let p = function (a, ar) { a.q.push(ar) }
                let d = C.document
                C.Cal = C.Cal || function () {
                    let cal = C.Cal
                    let ar = arguments
                    if (!cal.loaded) {
                        cal.ns = {}
                        cal.q = cal.q || []
                        d.head.appendChild(d.createElement('script')).src = A
                        cal.loaded = true
                    }
                    if (ar[0] === L) {
                        const api = function () { p(api, arguments) }
                        const namespace = ar[1]
                        api.q = api.q || []
                        if (typeof namespace === 'string') {
                            cal.ns[namespace] = cal.ns[namespace] || api
                            p(cal.ns[namespace], ar)
                            p(cal, ['initNamespace', namespace])
                        } else {
                            p(cal, ar)
                        }
                        return
                    }
                    p(cal, ar)
                }
            })(window, 'https://app.cal.com/embed/embed.js', 'init')

        window.Cal('init', 'kyxd', { origin: 'https://cal.com' })

        window.Cal('inline', {
            calLink: 'syed-haroon/kyxd',
            elementOrSelector: '#cal-inline-embed',
            config: {
                layout: 'month_view',
                theme: 'dark',
            },
            calOrigin: 'https://cal.com',
        })

        window.Cal('ui', {
            theme: 'dark',
            styles: {
                branding: { brandColor: '#4F46E5' },
            },
        })
    }, [])

    return (
        <div className="page-content" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="page-glow page-glow--top-right" />
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <ScrollReveal>
                        <span className="tag">Contact</span>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="heading-xl" style={{ marginTop: '24px' }}>
                            LET'S BUILD
                            <br />
                            <span className="text-gradient">TOGETHER</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="contact-hero__desc">
                            Start with sample datasets to validate your approach.
                            Scale to petabyte-batch production with custom collection infrastructure.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <div className="contact-hero__cta">
                            <a href="#book-call" className="btn btn-primary glow-button">
                                BOOK A CALL
                            </a>
                            <Link to="/samples" className="btn btn-secondary">
                                VIEW SAMPLES
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Cal.com Embed */}
            <section className="section" id="book-call">
                <div className="container">
                    <ScrollReveal>
                        <div className="cal-container">
                            <div className="cal-header">
                                <h2 className="heading-md">Schedule a Call</h2>
                                <p className="text-secondary" style={{ fontSize: '0.95rem', marginTop: '8px' }}>
                                    Select a time that works for you. We'll discuss your data requirements and how KYXD can help.
                                </p>
                            </div>
                            <div id="cal-inline-embed" style={{ width: '100%', minHeight: '680px', overflow: 'auto' }} />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Alternative Contact */}
            <section className="section section--dark">
                <div className="container">
                    <div className="contact-grid">
                        <ScrollReveal>
                            <div className="card contact-card">
                                <div className="contact-card__icon">✉</div>
                                <h3 className="heading-sm">Email Us</h3>
                                <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
                                    For general inquiries, partnership opportunities, or custom data requests.
                                </p>
                                <a href="mailto:syedharoon071@gmail.com" className="btn-ghost">
                                    syedharoon071@gmail.com
                                </a>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <div className="card contact-card">
                                <div className="contact-card__icon">⚡</div>
                                <h3 className="heading-sm">Enterprise</h3>
                                <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
                                    Custom collection pipelines, dedicated infrastructure, and enterprise-grade SLAs.
                                </p>
                                <a href="mailto:syedharoon071@gmail.com" className="btn-ghost">
                                    Get in touch
                                </a>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="card contact-card">
                                <div className="contact-card__icon">🔬</div>
                                <h3 className="heading-sm">Research</h3>
                                <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
                                    Academic partnerships, open-source collaborations, and dataset contributions.
                                </p>
                                <a href="mailto:syedharoon071@gmail.com" className="btn-ghost">
                                    Research inquiries
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    )
}
