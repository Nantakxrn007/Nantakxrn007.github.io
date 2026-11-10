import { useEffect, useState } from 'react'

const links = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Activities', 'activity'],
  ['Certificates', 'certificate'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled || menu ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" onClick={() => setMenu(false)}>
          NON<span>.</span>
        </a>
        <button type="button" className={`nav__burger ${menu ? 'is-open' : ''}`} onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}>
          <span /><span /><span />
        </button>
        <nav className={`nav__links ${menu ? 'is-open' : ''}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
