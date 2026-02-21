export default function Manifesto() {
    const year = new Date().getFullYear()

    return (
        <article className="manifesto">
            {/* Header */}
            <header className="manifesto__header">
                <p className="manifesto__brand fade-in">screu</p>
                <h1 className="manifesto__title fade-in fade-in-delay-1">
                    The world runs on data.<br />
                    Robots have almost none.
                </h1>
                <p className="manifesto__subtitle fade-in fade-in-delay-2">
                    We are building the data infrastructure for physical&nbsp;AI&nbsp;—
                    capturing the real world so machines can finally learn from&nbsp;it.
                </p>
            </header>

            {/* I — The Problem */}
            <section className="manifesto__section">
                <p className="manifesto__section-label">I</p>
                <h2 className="manifesto__section-heading">The Problem</h2>
                <p className="manifesto__text">
                    Large language models were trained on the entire internet. Billions of pages of text,
                    decades of human writing, every book, every conversation, every forum post ever
                    published. Vision models consumed billions of images scraped from the open web.
                    The supply of digital data was <em>functionally infinite</em>.
                </p>
                <p className="manifesto__text">
                    Physical AI has no such luxury.
                </p>
                <p className="manifesto__text">
                    A humanoid robot learning to fold laundry cannot scrape the internet for
                    training data. There is no ImageNet for manipulation. No Common Crawl for
                    locomotion. No Wikipedia for the physics of grasping a cup without crushing it.
                    The data that robots need — high-fidelity, multi-modal sensor streams from
                    real-world interactions — <em>does not exist at scale</em>.
                </p>
                <p className="manifesto__text">
                    This is the fundamental bottleneck of embodied intelligence. Not compute.
                    Not algorithms. <strong>Data.</strong>
                </p>
            </section>

            {/* II — The Bottleneck */}
            <section className="manifesto__section">
                <p className="manifesto__section-label">II</p>
                <h2 className="manifesto__section-heading">The Physical AI Bottleneck</h2>
                <p className="manifesto__text">
                    Every robotics lab in the world faces the same constraint. They build
                    extraordinary hardware. They design elegant learning algorithms. Then they
                    spend months — sometimes years — painstakingly collecting the training data
                    to make any of it work.
                </p>
                <p className="manifesto__text">
                    A single task demonstration might require hundreds of hours of human
                    teleoperation. Sensor calibration takes weeks. Format standardisation
                    is an afterthought. The resulting datasets are siloed, incompatible,
                    and too small to generalise.
                </p>

                <blockquote className="manifesto__quote">
                    The best robotics teams in the world are spending 80% of their time
                    on data collection and 20% on the research that actually matters.
                </blockquote>

                <p className="manifesto__text">
                    Simulation helps, but the sim-to-real gap remains brutal. Policies
                    trained in pristine virtual environments collapse when confronted with
                    the chaos, noise, and unpredictability of the physical world. There is
                    no substitute for real-world data.
                </p>
                <p className="manifesto__text">
                    The industry knows this. The labs know this. And yet, there is no
                    company dedicated to solving this problem at the infrastructure level.
                    Until now.
                </p>
            </section>

            {/* III — The Solution */}
            <section className="manifesto__section">
                <p className="manifesto__section-label">III</p>
                <h2 className="manifesto__section-heading">The screu Solution</h2>
                <p className="manifesto__text">
                    We are building <strong>Robotics Data-as-a-Service</strong>. Production-grade training
                    data for physical AI, captured from real-world robot deployments with
                    sub-millisecond sensor synchronisation.
                </p>
                <p className="manifesto__text">
                    Our platform captures multi-modal data streams — stereo vision, LiDAR
                    point clouds, IMU readings at 1000Hz, force-torque sensing, joint
                    encoders — all temporally aligned and structured for immediate use in
                    modern learning pipelines.
                </p>

                <ul className="manifesto__list">
                    <li>
                        <span className="manifesto__list-marker">01</span>
                        Dual synchronised cameras at 30fps with depth estimation
                    </li>
                    <li>
                        <span className="manifesto__list-marker">02</span>
                        LiDAR point clouds and IMU data at 1000Hz
                    </li>
                    <li>
                        <span className="manifesto__list-marker">03</span>
                        Complete task annotations with semantic labelling
                    </li>
                    <li>
                        <span className="manifesto__list-marker">04</span>
                        Structured formats compatible with LeRobot, RLDS, and Open X-Embodiment
                    </li>
                    <li>
                        <span className="manifesto__list-marker">05</span>
                        Cross-embodiment transfer data spanning multiple robot morphologies
                    </li>
                </ul>

                <p className="manifesto__text">
                    We do not build robots. We do not build learning algorithms.
                    We build the <em>connective tissue</em> between them — the high-fidelity
                    data that turns hardware into intelligence and algorithms into capability.
                </p>
            </section>

            {/* IV — The Belief */}
            <section className="manifesto__section">
                <p className="manifesto__section-label">IV</p>
                <h2 className="manifesto__section-heading">What We Believe</h2>
                <p className="manifesto__text">
                    We believe the next decade belongs to machines that can touch, grasp,
                    walk, and navigate the physical world. We believe this future will not
                    arrive through better hardware alone, or through larger models alone,
                    but through a <em>radical abundance of real-world training data</em>.
                </p>
                <p className="manifesto__text">
                    We believe that data infrastructure for physical AI will become as
                    fundamental as cloud computing became for software. And we believe
                    that the company that builds this infrastructure will shape the
                    trajectory of embodied intelligence itself.
                </p>

                <blockquote className="manifesto__quote">
                    The robots are ready. The algorithms are ready.<br />
                    The data is not. We are here to change that.
                </blockquote>
            </section>

            {/* Footer */}
            <footer className="manifesto__footer">
                <div className="manifesto__footer-line" />
                <p className="manifesto__cta-label">Inquiries</p>
                <a
                    href="mailto:syedharoon071@gmail.com"
                    className="manifesto__cta-link"
                >
                    syedharoon071@gmail.com
                </a>
                <p className="manifesto__copyright">
                    © {year} screu
                </p>
            </footer>
        </article>
    )
}
