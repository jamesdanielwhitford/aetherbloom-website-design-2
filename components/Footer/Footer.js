// File: components/Footer/Footer.js

import { useState } from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  const [logoError, setLogoError] = useState(false)

  const handleNavLinkClick = (e, href) => {
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

  const handleLogoError = () => {
    setLogoError(true)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* Left Side - Brand */}
          <div className={styles.footerBrand}>
            <div className={styles.brandSection}>
              {!logoError ? (
                <Image
                  src="/logo-white.webp"
                  alt="Aetherbloom Logo"
                  width={140}
                  height={36}
                  onError={handleLogoError}
                />
              ) : (
                <div className={styles.textLogo}>AETHERBLOOM</div>
              )}
              <p className={styles.brandTagline}>
                Your strategic outsourcing partner.<br />
                Where UK excellence meets global talent.
              </p>
            </div>

            <div className={styles.ctaSection}>
              <button className={styles.footerCta}>
                Get Free Strategy Session
              </button>
            </div>
          </div>

          {/* Right Side - Navigation */}
          <div className={styles.footerNav}>
            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Overview</h4>
              <ul className={styles.navList}>
                <li>
                  <a href="#why-aetherbloom" onClick={(e) => handleNavLinkClick(e, '#why-aetherbloom')}>
                    Why Aetherbloom
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')}>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" onClick={(e) => handleNavLinkClick(e, '#pricing')}>
                    Pricing Calculator
                  </a>
                </li>
                <li>
                  <a href="#testimonials" onClick={(e) => handleNavLinkClick(e, '#testimonials')}>
                    Client Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Services</h4>
              <ul className={styles.navList}>
                <li>
                  <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')}>
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')}>
                    Back Office Operations
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')}>
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')}>
                    Sales Support
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Company</h4>
              <ul className={styles.navList}>
                <li>
                  <a href="#about" onClick={(e) => handleNavLinkClick(e, '#about')}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#ethical-mission" onClick={(e) => handleNavLinkClick(e, '#ethical-mission')}>
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#training" onClick={(e) => handleNavLinkClick(e, '#training')}>
                    Training Programs
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Resources</h4>
              <ul className={styles.navList}>
                <li>
                  <a href="#case-studies" onClick={(e) => handleNavLinkClick(e, '#case-studies')}>
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#compliance" onClick={(e) => handleNavLinkClick(e, '#compliance')}>
                    GDPR Compliance
                  </a>
                </li>
                <li>
                  <a href="#blog" onClick={(e) => handleNavLinkClick(e, '#blog')}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#support" onClick={(e) => handleNavLinkClick(e, '#support')}>
                    Support Centre
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.footerInfo}>
            <div className={styles.contactInfo}>
              <span>📍 London, UK • Cape Town, South Africa</span>
              <span>✉️ info@aetherbloom.com</span>
              <span>🔒 GDPR Compliant • ISO Certified</span>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com/company/aetherbloom" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://instagram.com/aetherbloom" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>

          <div className={styles.footerLegal}>
            <p>&copy; {currentYear} Aetherbloom. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}