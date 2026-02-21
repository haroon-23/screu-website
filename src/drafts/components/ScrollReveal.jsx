import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '', delay = 0, threshold = 0.1 }) {
    const ref = useRef()

    useEffect(() => {
        const el = ref.current
        if (!el) return

        // If the element is already in view on mount, show immediately
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            requestAnimationFrame(() => {
                el.classList.add('active')
            })
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        setTimeout(() => {
                            el.classList.add('active')
                        }, delay)
                    } else {
                        el.classList.add('active')
                    }
                    observer.unobserve(el)
                }
            },
            { threshold, rootMargin: '0px 0px -20px 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay, threshold])

    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    )
}
