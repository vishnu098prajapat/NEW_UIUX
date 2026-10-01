import { useEffect, useRef } from 'react'

// Soft glowing cursor follower (desktop only).
export default function Cursor() {
  const dot = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    let x = 0, y = 0, cx = 0, cy = 0, raf
    const move = (e) => {
      x = e.clientX
      y = e.clientY
      const hot = e.target.closest('a, button, .tilt')
      dot.current?.classList.toggle('is-hot', !!hot)
    }
    const loop = () => {
      cx += (x - cx) * 0.16
      cy += (y - cy) * 0.16
      if (dot.current) dot.current.style.transform = `translate(${cx}px, ${cy}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <div className="cursor" ref={dot} aria-hidden="true"><i /></div>
}
