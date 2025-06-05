// File: hooks/useScrollBehavior.js

import { useState, useEffect } from 'react'

export default function useScrollBehavior() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let isScrolling = false

    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide navbar
            setIsNavbarHidden(true)
          } else {
            // Scrolling up - show navbar
            setIsNavbarHidden(false)
          }
          
          lastScrollY = currentScrollY
          isScrolling = false
        })
        isScrolling = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isNavbarHidden }
}