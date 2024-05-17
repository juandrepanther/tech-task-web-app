import { useState, useEffect } from 'react'

type ScrollDirection = 'up' | 'down'

const useScrollDirection = (initialValue: ScrollDirection = 'up'): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(initialValue)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollDirection
}

export default useScrollDirection
