import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'
import './Samples.css'

const FEATURES = [
    'Dual synchronized cameras at 30fps',
    'LiDAR point clouds & IMU at 1000Hz',
    'Scene annotations with bounding boxes',
    'Structured JSONL streams (ML-ready)',
    'Complete manifests with checksums',
    'Instant CDN download (ZIP or individual)',
]

const DATASET_TYPES = [
    {
        title: 'RL Teleoperation',
        desc: 'Multi-modal robotics data from real-world deployments. Complete task trajectories with synchronized sensor data from humanoid and bipedal robots.',
        badge: 'AVAILABLE',
        specs: ['30fps stereo vision', '1000Hz IMU', 'Full annotations'],
    },
    {
        title: 'First-Person POV',
        desc: 'Egocentric vision data from wearable sensor rigs. Paired with eye tracking, hand pose estimation, and gaze-directed attention maps.',
        badge: 'AVAILABLE',
        specs: ['4K resolution', 'Eye tracking', 'Hand pose'],
    },
    {
        title: 'Full-Body Motion',
        desc: 'High-fidelity motion capture with dense marker sets. Synchronized with force plates, EMG sensors, and video from multiple calibrated viewpoints.',
        badge: 'COMING SOON',
        specs: ['240Hz mocap', 'Force plates', 'Multi-view sync'],
    },
]

export default function Samples() {
    return (
        <div className="page-content" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="page-glow page-glow--top-right" />
            {/* Hero */}
            <section className="samples-hero">
                <div className="container">
                    <ScrollReveal>
                        <span className="tag">Data</span>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                        <h1 className="heading-xl" style={{ marginTop: '24px' }}>
                            SAMPLE
                            <br />
                            <span className="text-gradient">DATASETS</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <p className="samples-hero__desc">
                            Production-grade datasets spanning RL teleoperation, first-person POV,
                            and full-body motion capture. Multi-modal sensor streams ready for training.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Dataset Types */}
            <section className="section">
                <div className="container">
                    <div className="dataset-grid">
                        {DATASET_TYPES.map((d, i) => (
                            <ScrollReveal key={d.title} delay={i * 120}>
                                <div className="card dataset-card">
                                    <div className="dataset-card__header">
                                        <span className={`tag ${d.badge === 'COMING SOON' ? 'tag--muted' : ''}`}>
                                            {d.badge}
                                        </span>
                                    </div>
                                    <h3 className="heading-md dataset-card__title">{d.title}</h3>
                                    <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                                        {d.desc}
                                    </p>
                                    <div className="dataset-card__specs">
                                        {d.specs.map(s => (
                                            <span key={s} className="dataset-card__spec">{s}</span>
                                        ))}
                                    </div>
                                    {d.badge === 'AVAILABLE' ? (
                                        <Link to="/contact" className="btn btn-primary glow-button dataset-card__cta">
                                            REQUEST ACCESS
                                        </Link>
                                    ) : (
                                        <span className="btn btn-secondary dataset-card__cta dataset-card__cta--disabled">
                                            COMING SOON
                                        </span>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature List */}
            <section className="section section--dark">
                <div className="container">
                    <SectionHeading
                        eyebrow="RL Teleoperation"
                        title="WHAT'S"
                        titleAccent="INCLUDED"
                        description="Every dataset comes production-ready with complete metadata, calibration files, and documentation."
                    />
                    <div className="features-list">
                        {FEATURES.map((f, i) => (
                            <ScrollReveal key={f} delay={i * 80}>
                                <div className="feature-row">
                                    <span className="feature-row__dash">—</span>
                                    <span className="feature-row__text">{f}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Collection CTA */}
            <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="cta-glow" />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <ScrollReveal>
                        <span className="tag" style={{ marginBottom: '24px', display: 'inline-block' }}>Custom Data</span>
                        <h2 className="heading-lg">
                            NEED CUSTOM
                            <br />
                            <span className="text-gradient">COLLECTION?</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                        <p className="text-secondary" style={{
                            maxWidth: '560px', margin: '20px auto 40px',
                            fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)', lineHeight: '1.7'
                        }}>
                            Deploy our platform for your specific tasks, environments, and requirements.
                            Fast turnaround with enterprise licensing.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <Link to="/contact" className="btn btn-primary glow-button">
                            REQUEST CUSTOM COLLECTION
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
