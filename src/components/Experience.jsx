import { useEffect, useRef } from 'react'

const jobs = [
  {
    period: 'Jun 2025 to Sep 2025',
    role: 'Research Machine Learning for Sensor Data Analytics',
    logo: 'logos/mtec.webp',
    name: 'MTEC',
    tagline: 'Spotting failures before they happen',
    tags: ['Machine Learning', 'Anomaly Detection', 'Sensor Data', 'Health Score'],
    org: 'National Metal and Materials Technology Center',
    place: 'Pathumthani',
    points: [
      <>Developed a machine learning <strong>health score system</strong> for electroplating processes.</>,
      <>Integrated real-time <strong>anomaly detection</strong> to monitor bath conditions and give early warnings of potential failures.</>,
    ],
  },
  {
    period: 'Mar 2026 to May 2026',
    role: 'AI & Analytics Intern',
    logo: 'logos/ascend.png',
    name: 'Ascend Money (TrueMoney)',
    tags: ['Computer Vision', 'AppSheet', 'Feature Engineering', 'Automation'],
    org: 'Ascend Money Co., Ltd.',
    place: 'Bangkok',
    points: [
      <>Built AI models for TrueMoney Wallet merchant verification, automating image validation and cutting verification time from <strong>30 to 4 minutes</strong>. Merchants onboard faster and manual workload drops.</>,
      <>Developed an <strong>AppSheet platform</strong> that brings the whole process of launching new TrueMoney Wallet campaigns into one place. It makes life easier for the business team with <strong>status tracking</strong>, <strong>email notifications</strong> and smooth work handoff between team members.</>,
      <>Explored <strong>location features</strong> for predicting whether a customer will buy into a campaign, and tested whether adding them <strong>improves model accuracy</strong>.</>,
    ],
  },
  {
    period: 'Jun 2026 to Jul 2026',
    role: 'Data Science Intern',
    logo: 'logos/scgc.png',
    name: 'SCG Chemicals',
    tagline: 'Planning production before it runs',
    tags: ['Machine Learning', 'Prediction', 'AVEVA', 'Simulation'],
    org: 'Thai Plastic and Chemicals PCL',
    place: 'Rayong',
    points: [
      <>Developed a machine learning model to <strong>predict online reactor batch duration</strong>, supporting downstream production planning and reducing process waste.</>,
      <>Built an <strong>AVEVA simulation platform</strong> for internal testing, <strong>reducing software licensing costs</strong>.</>,
    ],
  },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const items = ref.current.querySelectorAll('.timeline__item')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-in')),
      { threshold: 0.15 }
    )
    items.forEach((i) => io.observe(i))
    return () => io.disconnect()
  }, [])
  return ref
}

export default function Experience() {
  const ref = useReveal()
  return (
    <section id="experience" className="exp">
      <div className="container">
        <h2 className="section-title">
          Work <span className="hl">Experience</span>
        </h2>

        <ol className="timeline" ref={ref}>
          {jobs.map((j) => (
            <li key={j.name} className="timeline__item">
              <span className="timeline__date">{j.period}</span>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__head">
                  <span className="timeline__logo">
                    <img src={j.logo} alt={`${j.name} logo`} />
                  </span>
                  <div>
                    <h3>{j.name}</h3>
                    <p className="timeline__org">
                      {j.org} <span>· {j.place}</span>
                    </p>
                  </div>
                </div>
                <p className="timeline__role">{j.role}</p>
                {j.tagline && <p className="timeline__tagline">{j.tagline}</p>}

                <ul>
                  {j.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <div className="timeline__tags">
                  {j.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
