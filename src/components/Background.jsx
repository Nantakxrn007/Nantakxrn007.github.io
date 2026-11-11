import { useEffect, useRef } from 'react'

// Animated "data network" background: drifting nodes joined by thin lines.
export default function Background() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w, h, dpr, nodes = [], raf
    const mouse = { x: -9999, y: -9999 }
    const LINK = 140

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(Math.floor((w * h) / 11000), 130)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 1.2,
        z: Math.random() * 0.5 + 0.2, // depth for scroll parallax
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const sy = window.scrollY
      const pos = nodes.map((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < -20) n.x = w + 20
        if (n.x > w + 20) n.x = -20
        if (n.y < -20) n.y = h + 20
        if (n.y > h + 20) n.y = -20
        // parallax: nodes with larger z move more as you scroll
        let py = (n.y - sy * n.z * 0.35) % (h + 40)
        if (py < -20) py += h + 40
        return { x: n.x, y: py, r: n.r }
      })

      for (let i = 0; i < pos.length; i++) {
        const a = pos[i]
        for (let j = i + 1; j < pos.length; j++) {
          const b = pos[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(0,229,255,${(1 - d / LINK) * 0.38})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (md < 170) {
          ctx.strokeStyle = `rgba(0,229,255,${(1 - md / 170) * 0.7})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
        ctx.fillStyle = 'rgba(0,229,255,.95)'
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = mouse.y = -9999 }
    const onVis = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(draw)
    }

    init()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', init)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseout', onLeave)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', init)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return <canvas ref={ref} className="bg-canvas" aria-hidden="true" />
}
