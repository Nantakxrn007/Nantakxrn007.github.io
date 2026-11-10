import { useState } from 'react'

const items = [
  {
    label: 'Phone',
    copy: '+66 92 556 0986',
    value: '+66 92 556 0986',
    href: 'tel:+66925560986',
    d: 'M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z',
  },
  {
    label: 'Email',
    copy: 'nantakorn.nac@gmail.com',
    value: 'nantakorn.nac@gmail.com',
    href: 'mailto:nantakorn.nac@gmail.com',
    d: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z',
  },
  {
    label: 'GitHub',
    value: 'github.com/Nantakxrn007',
    href: 'https://github.com/Nantakxrn007',
    d: 'M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nantakorn007',
    href: 'https://www.linkedin.com/in/nantakorn007',
    d: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.78 2.66 4.78 6.12v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z',
  },
  {
    label: 'Medium',
    value: 'medium.com/@nantakorn.nac',
    href: 'https://medium.com/@nantakorn.nac',
    d: 'M13.54 12a6.8 6.8 0 1 1-6.77-6.82A6.8 6.8 0 0 1 13.54 12Zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42S20.96 8.46 20.96 12ZM24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.53-5.75 1.19-5.75S24 8.83 24 12Z',
  },
  {
    label: 'YouTube',
    value: 'youtube.com/@dinoii457',
    href: 'https://www.youtube.com/@dinoii457/videos',
    d: 'M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8ZM10 15V9l5.2 3L10 15Z',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState('')
  const copy = async (label, text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(label)
      setTimeout(() => setCopied(''), 1500)
    } catch {}
  }

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            Contact <span className="hl">Me</span>
          </h2>

          <div className="contact__intro">
            <h3>Nantakorn Necamanurak <span>(Non)</span></h3>
            <p>Data Science and Innovation student, Thammasat University</p>
          </div>

          <div className="contact__grid">
            {items.map((it) => {
              const external = it.href.startsWith('http')
              return (
                <div key={it.label} className="ctile">
                  <a className="ctile__icon" href={it.href} target={external ? '_blank' : undefined} rel="noreferrer" aria-label={`Open ${it.label}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d={it.d} /></svg>
                  </a>
                  <span className="ctile__text">
                    <small>{it.label}</small>
                    <b>{it.value}</b>
                  </span>
                  {it.copy ? (
                    <button type="button" className="ctile__btn" onClick={() => copy(it.label, it.copy)}>
                      {copied === it.label ? 'Copied' : 'Copy'}
                    </button>
                  ) : (
                    <a className="ctile__btn" href={it.href} target="_blank" rel="noreferrer">Open</a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© 2026 Nantakorn Necamanurak. All rights reserved.</span>
          <a href="#home" className="footer__top" aria-label="Back to top">↑</a>
        </div>
      </footer>
    </>
  )
}
