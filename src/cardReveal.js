// Hero intro demo (runs inside the phone mockup):
//   1. ~2s after load a hand taps the green wallet card -> it lifts slightly (stays in the phone)
//   2. 2s pause
//   3. The hand taps each service (AEPS -> DMT -> Recharge -> BBPS -> Micro ATM -> Insurance):
//        - the tapped service icon lifts up inside the phone
//        - that service's card slides in beside the phone, replacing the previous one
//   4. Repeats while the hero is on screen.
//
// Tweak the numbers in TIMING to speed it up / slow it down.

const TIMING = {
  start: 900,     // ms after page load before the hand appears
  walletLift: 1000, // how long the wallet card stays lifted
  gap: 900,       // pause after the wallet card
  dwell: 2500,     // how long each service card stays before the next tap
  loopPause: 1600, // pause before the whole tour repeats
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export function runCardReveal(art) {
  const wallet = art.querySelector('.ps-wallet')
  const hand = art.querySelector('.hand')
  const taps = [...art.querySelectorAll('.tap')]
  const boxes = [...art.querySelectorAll('.ps-grid > div')]
  const cards = [...art.querySelectorAll('.svc')]
  const ccard = art.querySelector('.ccard')
  if (!wallet || !hand || !boxes.length) return () => {}

  // Reduced motion: just show the first service card, no movement.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards[0]?.classList.add('on')
    ccard?.classList.add('on')
    boxes[0]?.classList.add('on')
    return () => {}
  }

  let dead = false
  let visible = true
  let raf = 0
  const anims = []
  const play = (el, kf, opt) => {
    const a = el.animate(kf, opt)
    anims.push(a)
    return a.finished.catch(() => {})
  }

  // ---- helpers ----
  const rel = (el, fx = 0.5, fy = 0.5) => {
    const r = el.getBoundingClientRect(), a = art.getBoundingClientRect()
    return { x: r.left - a.left + r.width * fx, y: r.top - a.top + r.height * fy }
  }

  // The hand glides toward `tgt()` every frame (so it also tracks the floating phone).
  let hx = 0, hy = 0, tgt = null
  const loop = () => {
    if (tgt) {
      const p = tgt()
      hx += (p.x - hx) * 0.12
      hy += (p.y - hy) * 0.12
    }
    hand.style.translate = `${hx - 18}px ${hy - 3}px`
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  const arrive = async (limit = 1800) => {
    const t0 = performance.now()
    while (!dead && performance.now() - t0 < limit) {
      const p = tgt()
      if (Math.hypot(p.x - hx, p.y - hy) < 3) break
      await sleep(40)
    }
  }
  const showHand = (from) => {
    const p = from()
    hx = p.x + 90; hy = p.y + 170
    tgt = from
    return play(hand, [{ opacity: 0 }, { opacity: 1 }], { duration: 400, fill: 'forwards' })
  }
  const hideHand = () => {
    const base = tgt ? tgt() : { x: hx, y: hy }
    tgt = () => ({ x: base.x + 70, y: base.y + 150 })
    return play(hand, [{ opacity: 1 }, { opacity: 0 }], { duration: 600, fill: 'forwards' })
  }
  const press = (x, y) => {
    play(hand, [
      { transform: 'scale(1)' },
      { transform: 'translateY(2px) scale(.84)', offset: 0.4 },
      { transform: 'scale(1)' },
    ], { duration: 340 })
    taps.forEach((t, i) => {
      t.style.left = `${x}px`
      t.style.top = `${y}px`
      play(t, [
        { transform: 'translate(-50%,-50%) scale(.15)', opacity: 0.7 },
        { transform: 'translate(-50%,-50%) scale(2.4)', opacity: 0 },
      ], { duration: 850, delay: i * 240, easing: 'ease-out', fill: 'backwards' })
    })
  }
  const waitVisible = async () => { while (!dead && !visible) await sleep(300) }

  // ---- service selection ----
  let cur = -1
  const setActive = (i) => {
    if (cur >= 0) {
      boxes[cur]?.classList.remove('on')
      const prev = cards[cur]
      if (prev) {
        prev.classList.remove('on')
        prev.classList.add('out')
        setTimeout(() => prev.classList.remove('out'), 800)
      }
    }
    cur = i
    if (i >= 0) {
      boxes[i].classList.add('on')
      cards[i]?.classList.remove('out')
      // next frame so the enter transition runs
      requestAnimationFrame(() => cards[i]?.classList.add('on'))
    }
  }

  // Pause when the hero is off-screen.
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0.2 })
  io.observe(art)

  ;(async () => {
    await sleep(TIMING.start)
    if (dead) return

    // 1) wallet card: tap -> lifts slightly
    const wp = () => rel(wallet, 0.6, 0.55)
    await showHand(wp)
    await arrive()
    if (dead) return
    await sleep(200)
    press(wp().x, wp().y)
    await sleep(150)
    wallet.classList.add('lift')
    ccard?.classList.add('on')
    await sleep(TIMING.walletLift)
    wallet.classList.remove('lift')
    await hideHand()

    // 2) gap
    await sleep(TIMING.gap)

    // 3) tour through the services, forever
    while (!dead) {
      await waitVisible()
      if (dead) return
      const first = () => rel(boxes[0].querySelector('.ps-ic') || boxes[0], 0.6, 0.5)
      await showHand(first)
      for (let i = 0; i < boxes.length && !dead; i++) {
        await waitVisible()
        const icon = boxes[i].querySelector('.ps-ic') || boxes[i]
        tgt = () => rel(icon, 0.6, 0.5)
        await arrive()
        if (dead) return
        await sleep(180)
        const p = tgt()
        press(p.x, p.y)
        await sleep(160)
        setActive(i)
        await sleep(TIMING.dwell)
      }
      await hideHand()
      setActive(-1)
      await sleep(TIMING.loopPause)
    }
  })()

  return () => {
    dead = true
    cancelAnimationFrame(raf)
    io.disconnect()
    anims.forEach((a) => { try { a.cancel() } catch (e) { /* ignore */ } })
    wallet.classList.remove('lift')
    ccard?.classList.remove('on')
    boxes.forEach((b) => b.classList.remove('on'))
    cards.forEach((c) => c.classList.remove('on', 'out'))
  }
}
