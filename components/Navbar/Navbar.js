// File: components/Navbar/Navbar.js

import { useState, useEffect } from 'react'
import Image from 'next/image'
import useScrollBehavior from '../../hooks/useScrollBehavior'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [logoError, setLogoError] = useState(false)
  
  const { isNavbarHidden } = useScrollBehavior()

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const handleNavLinkClick = (e, href) => {
    // Close mobile menu
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
    
    // Smooth scroll to target if it's an anchor link
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleMobileMenu()
    }
    
    // Handle escape key to close mobile menu
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false)
      document.body.style.overflow = ''
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(`.${styles.navbar}`)
      if (navbar && !navbar.contains(event.target)) {
        setIsMobileMenuOpen(false)
        document.body.style.overflow = ''
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Close mobile menu on window resize if switching to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
        document.body.style.overflow = ''
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Update active navigation on scroll
  useEffect(() => {
    const updateActiveNavigation = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    let scrollTimeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(updateActiveNavigation, 50)
    }

    window.addEventListener('scroll', handleScroll)
    updateActiveNavigation()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  const handleLogoError = () => {
    setLogoError(true)
  }

  return (
    <nav className={`${styles.navbar} ${isNavbarHidden ? styles.hidden : ''}`}>
      {/* Mobile Menu Toggle */}
      <button 
        className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={toggleMobileMenu}
        onKeyDown={handleKeyDown}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Logo/Brand */}
      <div className={styles.navbarBrand}>
        {!logoError ? (
          <Image
            src="/logo.webp"
            alt="Aetherbloom Logo"
            width={120}
            height={32}
            onError={handleLogoError}
            priority
          />
        ) : (
          <div className={styles.textLogo}>AETHERBLOOM</div>
        )}
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navbarNav} ${isMobileMenuOpen ? styles.active : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
              onClick={(e) => handleNavLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className={styles.navbarActions}>
        <a href="#pricing" className={`${styles.btn} ${styles.btnSecondary}`}>
          Pricing
        </a>
        <a href="#get-started" className={`${styles.btn} ${styles.btnPrimary}`}>
          Get Started
        </a>
      </div>
    </nav>
  )
}