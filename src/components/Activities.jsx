import { useEffect, useRef, useState } from 'react'

const activities = [
  {
    year: '2024',
    title: 'Thammasat Hackathon: Future Wellness',
    text: 'Joined the hackathon to design innovative ideas for future wellness.',
    img: 'activity/a1.webp',
  },
  {
    year: '2024',
    title: '88 Sandbox x Thammasat Hackathon: Startup',
    text: 'Pitched and built a startup idea in a startup-focused hackathon.',
    img: 'activity/a2.webp',
  },
  {
    year: '2024',
    title: 'World of Data Camp: Teaching Data Science',
    text: 'Taught data science basics to students at World of Data Camp.',
    img: 'activity/a3.webp',
  },
  {
    year: '2025',
    title: 'World of Data Camp: Teaching Looker Studio',
    text: 'Taught students to build dashboards with Looker Studio.',
    img: 'activity/a4.webp',
  },
]

export default function Activities() {
  const ref = useRef(null)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const els = ref.current.querySelectorAll('.acard')
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('is-in')),
      { threshold: 0.15 }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section id="activity" className="activity">
      <div className="container">
        <h2 className="section-title">
          My <span className="hl">Activities</span>
        </h2>

        <div className="agrid" ref={ref}>
          {activities.map((a, i) => (
            <article key={a.title} className="acard">
              <button type="button" className="acard__media" onClick={() => setOpen(i)} aria-label={`Enlarge ${a.title}`}>
                <img src={a.img} alt={a.title} loading="lazy" />
                <span className="acard__year">{a.year}</span>
              </button>
              <div className="acard__body">
                <span className="acard__num">0{i + 1}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <img src={activities[open].img} alt={activities[open].title} />
          <button type="button" className="lightbox__close" aria-label="Close">×</button>
          <p>{activities[open].title}</p>
        </div>
      )}
    </section>
  )
}
