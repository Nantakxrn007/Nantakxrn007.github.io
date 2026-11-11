import { useEffect, useState } from 'react'

// Scroll progress bar + reveal-on-scroll for headings and small blocks + hero parallax.
export default function Motion() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      if (!reduce) {
        const y = Math.min(window.scrollY, 900)
        const photo = document.querySelector('.hero__photo')
        const text = document.querySelector('.hero__text')
        if (photo) photo.style.transform = `translateY(${y * 0.12}px)`
        if (text) text.style.transform = `translateY(${y * -0.06}px)`
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    let io
    if (!reduce) {
      const targets = document.querySelectorAll(
        '.section-title, .section-sub, .about__card, .about__summary, .about__facts > div, .skills__title, .skill, .contact__intro, .ctile'
      )
      io = new IntersectionObserver(
        (es) => es.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
        }),
        { threshold: 0.15 }
      )
      targets.forEach((el, i) => {
        el.classList.add('rv')
        el.style.setProperty('--d', `${(i % 4) * 70}ms`)
        io.observe(el)
      })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      io && io.disconnect()
    }
  }, [])

  return <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
}
