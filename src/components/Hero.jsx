const social = [
  { label: 'GitHub', href: 'https://github.com/Nantakxrn007', d: 'M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nantakorn007', d: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.78 2.66 4.78 6.12v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z' },
  { label: 'Email', href: 'mailto:nantakorn.nac@gmail.com', d: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__photo">
          <div className="hero__glow" aria-hidden="true" />
          <img src="hero.png" alt="Nantakorn presenting on stage" />
        </div>
        <div className="hero__text">
          <p className="hero__eyebrow">Nantakorn Necamanurak | Data Science and Innovation student (Non)</p>
          <h1 className="hero__title">
            I will use <span className="hl">all my knowledge</span> to make
            <span className="hl"> Thailand</span> better.
          </h1>

          <div className="hero__social">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
          <a className="hero__mail" href="mailto:nantakorn.nac@gmail.com">nantakorn.nac@gmail.com</a>
        </div>

      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
