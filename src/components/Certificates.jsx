import { useEffect, useRef, useState } from 'react'

const certs = [
  {
    title: 'Data Analyst Digital Skill Test',
    by: 'SKILLKAMP & FTI Academy',
    img: 'certificate/c1.webp',
    feature: 'big',
  },
  {
    title: 'National Health Innovation Concept Contest',
    by: 'Srinakharinwirot University, 2024',
    img: 'certificate/c5.webp',
    feature: 'big',
    win: '1st Place Winner',
  },
  {
    title: 'ExxonMobil Bootcathon 2024',
    by: 'ExxonMobil',
    img: 'certificate/c2.webp',
  },
  {
    title: 'Google Cloud Fundamentals: Big Data and Machine Learning',
    by: 'Google Cloud',
    img: 'certificate/c3.webp',
  },
  {
    title: 'Google Developer Student Clubs Member',
    by: 'Thammasat University, 2023-2024',
    img: 'certificate/c4.webp',
  },
  {
    title: 'Thammasat Hackathon 2024 (TradeSphere)',
    by: '88 Sandbox, Thammasat University',
    img: 'certificate/c6.webp',
  },
]

export default function Certificates() {
  const ref = useRef(null)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const els = ref.current.querySelectorAll('.ccard')
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('is-in')),
      { threshold: 0.12 }
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
    <section id="certificate" className="certs">
      <div className="container">
        <h2 className="section-title">
          My <span className="hl">Certificates</span>
        </h2>

        <div className="cgrid" ref={ref}>
          {certs.map((c, i) => (
            <article key={c.title} className={`ccard ${c.feature ? 'ccard--big' : ''} ${c.win ? 'ccard--win' : ''}`} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <button type="button" className="ccard__media" onClick={() => setOpen(i)} aria-label={`Enlarge ${c.title}`}>
                <img src={c.img} alt={c.title} loading="lazy" />
              </button>
              <div className="ccard__body">
                {c.win && <span className="ccard__win">{c.win}</span>}
                <h3>{c.title}</h3>
                <p>{c.by}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <img src={certs[open].img} alt={certs[open].title} />
          <button type="button" className="lightbox__close" aria-label="Close">×</button>
          <p>{certs[open].title}</p>
        </div>
      )}
    </section>
  )
}
