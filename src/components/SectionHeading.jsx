import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ eyebrow, title, titleAccent, description, align = 'left', delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <div className={`section-heading section-heading--${align}`} style={{
                textAlign: align,
                maxWidth: align === 'center' ? '800px' : 'none',
                margin: align === 'center' ? '0 auto' : '0',
                marginBottom: 'clamp(40px, 5vw, 64px)',
            }}>
                {eyebrow && (
                    <span className="tag" style={{ marginBottom: '20px', display: 'inline-block' }}>
                        {eyebrow}
                    </span>
                )}
                <h2 className="heading-lg" style={{ marginBottom: '20px' }}>
                    {title}
                    {titleAccent && (
                        <>
                            <br />
                            <span className="text-gradient">{titleAccent}</span>
                        </>
                    )}
                </h2>
                {description && (
                    <p className="text-secondary" style={{
                        fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
                        lineHeight: '1.7',
                        maxWidth: '640px',
                        margin: align === 'center' ? '0 auto' : '0',
                    }}>
                        {description}
                    </p>
                )}
            </div>
        </ScrollReveal>
    )
}
