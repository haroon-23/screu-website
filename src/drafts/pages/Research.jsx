import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import './Research.css'

const DIRECTIONS = [
    {
        title: 'Data Representation',
        desc: 'Unified formats for multi-modal robot data. Standardizing how observations, actions, and proprioception are encoded across heterogeneous platforms.',
        icon: '⟐',
    },
    {
        title: 'Cross-Embodiment Transfer',
        desc: 'Learning policies that generalize across robot morphologies. Mapping action spaces between manipulators with different kinematics and dynamics.',
        icon: '◎',
    },
    {
        title: 'Demonstration Learning',
        desc: 'Efficient imitation from human teleoperation. Extracting task structure and motion primitives from expert demonstrations at scale.',
        icon: '⬡',
    },
    {
        title: 'Sensor Fusion',
        desc: 'Integrating visual, proprioceptive, and tactile modalities. Temporal alignment and attention mechanisms for multi-sensor robot learning.',
        icon: '△',
    },
]

const PAPERS = [
    {
        title: 'Empirical Characterization of the Sim2Real Gap in Bipedal Humanoid Robots',
        date: 'December 2024',
        type: 'Research Paper',
        desc: 'A comprehensive quantitative study of the simulation-to-reality gap using humanoid robots. Analysis reveals leg joints exhibit 2× higher error than arms, providing actionable insights for domain randomization and sim2real transfer.',
    },
    {
        title: 'Open Robot Training Format (ORTF) v1.0',
        date: 'December 2024',
        type: 'Specification Draft',
        desc: 'A standardized format for robot teleoperation data. Defines schemas for multi-modal observations, action spaces, sensor calibration, and coordinate frames. Designed for interoperability with LeRobot, RLDS, and Open X-Embodiment.',
    },
]

const APPROACH = [
    {
        title: 'Universality',
        desc: 'Formats and methods that work across robot types, sensor configurations, and task domains. No platform lock-in.',
        icon: '◈',
    },
    {
        title: 'Existence Proofs',
        desc: 'Reference implementations for every specification. If we propose it, we build it. Theory backed by working code.',
        icon: '◇',
    },
    {
        title: 'Zero Ambiguity',
        desc: 'Explicit semantics for every field. Coordinate frames, units, and conventions documented. No implicit assumptions.',
        icon: '⬢',
    },
]

export default function Research() {
    return (
        <div className="page-content" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="page-glow page-glow--top-right" />
            {/* Hero */}
            <section className="research-hero">
                <div className="container">
                    <ScrollReveal>
                        <span className="tag">Research</span>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                        <h1 className="heading-xl" style={{ marginTop: '24px' }}>
                            ADVANCING ROBOT
                            <br />
                            <span className="text-gradient">INTELLIGENCE</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <p className="research-hero__desc">
                            We develop foundational infrastructure for robot learning—from data
                            representation to cross-embodiment transfer. Our work enables the
                            next generation of general-purpose robotic systems.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Research Directions */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        eyebrow="Focus Areas"
                        title="RESEARCH"
                        titleAccent="DIRECTIONS"
                    />
                    <div className="card-grid">
                        {DIRECTIONS.map((d, i) => (
                            <ScrollReveal key={d.title} delay={i * 100}>
                                <div className="card research-card">
                                    <div className="research-card__icon">{d.icon}</div>
                                    <h3 className="heading-sm">{d.title}</h3>
                                    <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                                        {d.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Papers */}
            <section className="section section--dark">
                <div className="container">
                    <SectionHeading
                        eyebrow="Publications"
                        title="SPECIFICATIONS"
                        titleAccent="& PAPERS"
                    />
                    <div className="papers-list">
                        {PAPERS.map((p, i) => (
                            <ScrollReveal key={p.title} delay={i * 150}>
                                <div className="card paper-card">
                                    <div className="paper-card__meta">
                                        <span className="tag">{p.type}</span>
                                        <span className="text-muted" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{p.date}</span>
                                    </div>
                                    <h3 className="heading-md paper-card__title">{p.title}</h3>
                                    <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
                                        {p.desc}
                                    </p>
                                    <span className="btn-ghost" style={{ marginTop: '12px' }}>Read Specification</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        eyebrow="Philosophy"
                        title="OUR"
                        titleAccent="APPROACH"
                    />
                    <div className="card-grid">
                        {APPROACH.map((a, i) => (
                            <ScrollReveal key={a.title} delay={i * 100}>
                                <div className="card research-card">
                                    <div className="research-card__icon">{a.icon}</div>
                                    <h3 className="heading-sm">{a.title}</h3>
                                    <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                                        {a.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="cta-glow" />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <ScrollReveal>
                        <h2 className="heading-lg">
                            BUILDING STANDARDS
                            <br />
                            <span className="text-gradient">TOGETHER</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                        <p className="text-secondary" style={{
                            maxWidth: '560px', margin: '20px auto 40px',
                            fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)', lineHeight: '1.7'
                        }}>
                            We believe open standards accelerate the entire field. If you are working on
                            robot learning infrastructure, data formats, or cross-embodiment transfer,
                            we would like to hear from you.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <a href="mailto:syedharoon071@gmail.com" className="btn btn-primary glow-button">
                            CONTACT RESEARCH TEAM
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
