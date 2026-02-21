import Scene3D from '../components/Scene3D'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'
import './Home.css'

const PIPELINE_CARDS = [
    {
        title: 'Imitation Learning',
        desc: 'Success-labeled trajectories from real robot deployments. Complete state-action pairs with synchronized vision and proprioception. Ready for behavior cloning and inverse RL.',
        icon: '⟐',
    },
    {
        title: 'Foundation Models',
        desc: 'Large-scale multi-modal data across diverse tasks and robot morphologies. Vision-language-action triplets for generalist policy pre-training.',
        icon: '◎',
    },
    {
        title: 'Human-Robot Interaction',
        desc: 'Multi-perspective human motion with 3D pose annotations. First-person and external viewpoints synchronized with body landmark tracking.',
        icon: '⬡',
    },
    {
        title: 'Production Deployment',
        desc: 'Real-world failure modes and edge cases from live deployments. Continuous data collection for online learning and policy updates.',
        icon: '△',
    },
]

const SPECS = [
    { label: 'Sensor Sync', value: '< 1ms' },
    { label: 'Timestamp Precision', value: 'Nanosecond' },
    { label: 'Video Streams', value: '4K @ 60fps' },
    { label: 'IMU Sample Rate', value: '1000 Hz' },
    { label: 'Annotation QA', value: '99.7% Accuracy' },
    { label: 'Scale', value: 'Petabyte-class' },
]

const FEATURES = [
    {
        title: 'Hardware-Level Sync',
        desc: 'Sub-millisecond timestamp alignment across vision, proprioception, IMU, audio, and depth with nanosecond-precision Unix epochs.',
        icon: '◈',
    },
    {
        title: 'Human-Verified Labels',
        desc: 'Automated quality checks with distributed annotation infrastructure and inter-annotator agreement tracking.',
        icon: '◇',
    },
    {
        title: 'Multi-Modal Fusion',
        desc: 'Integrated sensor streams from cameras, LiDAR, force-torque, and proprioceptive encoders in unified formats.',
        icon: '⬢',
    },
]

export default function Home() {
    return (
        <div className="page-content">
            <Scene3D />

            {/* ═══ HERO ═══ */}
            <section className="hero">
                <div className="hero__content">
                    <ScrollReveal>
                        <span className="tag">Physical AI Infrastructure</span>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                        <h1 className="heading-xl hero__title">
                            TRAINING DATA
                            <br />
                            <span className="text-gradient">FOR PHYSICAL AI</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <p className="hero__subtitle">
                            Multi-modal sensor fusion from real-world robot deployments.
                            Hardware-synchronized streams with sub-millisecond precision.
                            Built to scale from pilot datasets to petabyte-batch training pipelines.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={450}>
                        <div className="hero__actions">
                            <Link to="/samples" className="btn btn-primary glow-button">
                                VIEW SAMPLES
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                SCALE TO PRODUCTION
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
                <div className="hero__scroll-indicator">
                    <div className="hero__scroll-line" />
                    <span className="hero__scroll-text">SCROLL</span>
                </div>
            </section>

            {/* ═══ PRODUCTION INFRASTRUCTURE ═══ */}
            <section className="section" id="infrastructure">
                <div className="container">
                    <SectionHeading
                        eyebrow="Infrastructure"
                        title="PRODUCTION"
                        titleAccent="INFRASTRUCTURE"
                        description="Hardware-level synchronization across vision, proprioception, IMU, audio, and depth. Sub-millisecond timestamp alignment with nanosecond-precision Unix epochs."
                    />
                    <div className="card-grid">
                        {FEATURES.map((f, i) => (
                            <ScrollReveal key={f.title} delay={i * 100}>
                                <div className="card feature-card">
                                    <div className="feature-card__icon">{f.icon}</div>
                                    <h3 className="heading-sm feature-card__title">{f.title}</h3>
                                    <p className="text-secondary feature-card__desc">{f.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ TECHNICAL SPECS ═══ */}
            <section className="section section--dark" id="specs">
                <div className="container">
                    <SectionHeading
                        eyebrow="Specifications"
                        title="TECHNICAL"
                        titleAccent="SPECIFICATIONS"
                        align="center"
                    />
                    <ScrollReveal>
                        <div className="specs-grid">
                            {SPECS.map((s) => (
                                <div key={s.label} className="spec-card">
                                    <div className="stat-value">{s.value}</div>
                                    <div className="stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ TRAINING PIPELINES ═══ */}
            <section className="section" id="pipelines">
                <div className="container">
                    <SectionHeading
                        eyebrow="Pipelines"
                        title="TRAINING"
                        titleAccent="PIPELINES"
                        description="Production-ready data organized by use case. Every dataset includes complete metadata, sensor calibrations, and coordinate frame documentation."
                    />
                    <div className="card-grid pipeline-grid">
                        {PIPELINE_CARDS.map((card, i) => (
                            <ScrollReveal key={card.title} delay={i * 100}>
                                <div className="card pipeline-card">
                                    <div className="pipeline-card__icon">{card.icon}</div>
                                    <h3 className="heading-sm pipeline-card__title">{card.title}</h3>
                                    <p className="text-secondary pipeline-card__desc">{card.desc}</p>
                                    <span className="btn-ghost" style={{ marginTop: 'auto', paddingTop: '16px' }}>
                                        Learn more
                                    </span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="section cta-section">
                <div className="cta-glow" />
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <ScrollReveal>
                        <h2 className="heading-lg" style={{ marginBottom: '20px' }}>
                            SCALE YOUR
                            <br />
                            <span className="text-gradient">TRAINING PIPELINE</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                        <p className="text-secondary" style={{
                            maxWidth: '560px',
                            margin: '0 auto 40px',
                            fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
                            lineHeight: '1.7'
                        }}>
                            Start with sample datasets to validate your approach.
                            Scale to petabyte-batch production with custom collection infrastructure.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <div className="hero__actions" style={{ justifyContent: 'center' }}>
                            <Link to="/samples" className="btn btn-secondary">VIEW SAMPLES</Link>
                            <Link to="/contact" className="btn btn-primary glow-button">GET STARTED</Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
