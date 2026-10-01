import { createContext, forwardRef, useCallback, useContext, useEffect, useState } from 'react'

// Tiny History-API router (no extra dependency).
const Ctx = createContext({ path: '/', navigate: () => {} })
export const useRouter = () => useContext(Ctx)

const clean = (p) => p.replace(/\/+$/, '') || '/'

function scrollToHash(hash) {
  setTimeout(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) return el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, 60)
}

export function Router({ children }) {
  const [path, setPath] = useState(clean(window.location.pathname))

  useEffect(() => {
    const onPop = () => { setPath(clean(window.location.pathname)); scrollToHash(window.location.hash) }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to) => {
    const url = new URL(to, window.location.origin)
    window.history.pushState({}, '', url.pathname + url.search + url.hash)
    setPath(clean(url.pathname))
    scrollToHash(url.hash)
  }, [])

  return <Ctx.Provider value={{ path, navigate }}>{children}</Ctx.Provider>
}

// Drop-in <a>. "#section" links become "/#section" so they work from any page.
export const Link = forwardRef(function Link({ href = '/', onClick, children, ...rest }, ref) {
  const { navigate } = useRouter()
  const external = /^(https?:|mailto:|tel:)/.test(href)
  const to = href.startsWith('#') ? '/' + href : href
  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || external || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a ref={ref} href={to} onClick={handle} {...rest}>
      {children}
    </a>
  )
})
