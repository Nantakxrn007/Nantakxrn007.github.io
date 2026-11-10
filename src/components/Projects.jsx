import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: 'Data Governance for a Hospital Dermatology Center',
    tag: 'Course Project',
    img: 'projects/p1.webp',
    text: 'Data Governance course project. Designed the data governance framework (CKAN Open-D) and data model for the Thammasat Dermatology Center at Thammasat University Hospital, so data can be collected with high quality.',
  },
  {
    title: 'Pharmacy Chatbot',
    tag: 'Faculty of Pharmacy',
    img: 'projects/p2.webp',
    text: 'Built with the Faculty of Pharmacy, Thammasat University. An LLM chatbot that helps pharmacists find information in the knowledge base faster and assists with dosage calculation.',
  },
  {
    title: 'Seizure Activity vs. EEG Artifacts',
    tag: 'Deep Learning',
    img: 'projects/p3.webp',
    text: 'Uses deep learning to separate noise from real seizure activity in EEG signals, toward more reliable EEG interpretation.',
    link: { href: 'https://medium.com/@nantakorn.nac/distinguishing-seizure-activity-from-eeg-artifacts-toward-more-reliable-eeg-interpretation-3abae63e2a8d', label: 'Read on Medium' },
  },
  {
    title: 'ELT & Data Warehouse on AWS',
    tag: 'Data Engineering',
    img: 'projects/p4.webp',
    text: 'Experimented with an ELT pipeline and data warehouse on Amazon Web Services, with the results delivered to Looker Studio dashboards.',
  },
  {
    title: 'Hospital Readiness Index for an Aging Population',
    tag: 'Healthcare Analytics',
    img: 'projects/p5.webp',
    text: 'A prototype readiness index and interactive simulation that assesses hospital infrastructure preparedness for an aging society, helping provincial administrators plan healthcare resources and workforce.',
  },
  {
    title: 'Electroplating Defect Counting',
    tag: 'Image Processing',
    img: 'projects/p6.webp',
    text: 'Counts defect spots on electroplated copper sheets using image processing.',
  },
  {
    title: 'Chest X-Ray Pneumonia Classification',
    tag: 'Course Project',
    img: 'projects/p7.webp',
    text: 'Algorithm for Data Science course. A deep learning model that classifies chest X-ray images for pneumonia.',
  },
  {
    title: 'Cafe Opening Analysis',
    tag: 'Course Project',
    img: 'projects/p8.webp',
    text: 'Marketing course. Analyzed cafe openings in Rangsit, Khlong Hok and Khlong Neung with Google Maps and demographic data, using WangchanBERTa sentiment analysis, review bias checks, competitor analysis and key-location impact.',
  },
  {
    title: 'Context-Aware Automatic Threshold',
    tag: 'Research with MTEC',
    img: 'projects/p9.webp',
    text: 'Research with MTEC on an automatic threshold that adapts to its environment, used for anomaly detection in the electroplating process.',
  },
  {
    title: 'Cisco Network Workshop',
    tag: 'Workshop',
    img: 'projects/p10.webp',
    fit: 'contain',
    text: 'Network course workshop on connecting and configuring routers with Cisco simulation software.',
  },
  {
    title: 'Water Dispenser Finder App',
    tag: 'Course Project',
    img: 'projects/p11.webp',
    text: 'Innovation for Society course. Designed an app that helps people find nearby drinking water dispensers.',
  },
  {
    title: 'Sorting Algorithm Visualization',
    tag: 'Video',
    img: 'https://img.youtube.com/vi/pkSAD9Xzda0/hqdefault.jpg',
    play: true,
    text: 'Visualization of bubble sort and merge sort, made for DSI208 Data Structures and Algorithms.',
    link: { href: 'https://www.youtube.com/watch?v=pkSAD9Xzda0', label: 'Watch on YouTube' },
  },
]

export default function Projects() {
  const [open, setOpen] = useState(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.pcard')
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('is-in')),
      { threshold: 0.12 }
    )
    cards.forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="hl">Projects</span>
        </h2>
        <p className="section-sub">
          Projects built with organizations and teams where I can share the work, plus
          university course projects. Internship work is not included here.
        </p>

        <div className="pgrid" ref={gridRef}>
          {projects.map((p, i) => (
            <article key={p.title} className="pcard" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <button
                type="button"
                className="pcard__media"
                onClick={() => (p.link && p.play ? window.open(p.link.href, '_blank', 'noopener') : setOpen(i))}
                aria-label={p.play ? `Watch ${p.title}` : `Enlarge ${p.title}`}
              >
                <img src={p.img} alt={p.title} loading="lazy" />
                {p.play && <span className="pcard__play" aria-hidden="true" />}
              </button>
              <div className="pcard__body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.link && (
                  <a className="pcard__link" href={p.link.href} target="_blank" rel="noreferrer">
                    {p.link.label} <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <img src={projects[open].img} alt={projects[open].title} />
          <button type="button" className="lightbox__close" aria-label="Close">×</button>
          <p>{projects[open].title}</p>
        </div>
      )}
    </section>
  )
}
