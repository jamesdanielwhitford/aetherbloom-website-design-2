// File: components/Hero.js

import { useState } from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleCalculatorClick = () => {
    setIsCalculatorModalOpen(true)
  }

  const handleSecondaryClick = (e) => {
    const href = e.target.getAttribute('href')
    if (href && href.startsWith('#')) {
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

  const closeModal = () => {
    setIsCalculatorModalOpen(false)
  }

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  return (
    <>
      <section className={styles.hero} id="home">
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleMain}>Elevate Your Business</span>
                <span className={styles.heroTitleAccent}>with Strategic Outsourcing</span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                Bridge UK excellence with South Africa's top talent. Cut costs by 40%+ 
                while scaling customer service, tech support, and back-office teams—all with 
                UK compliance and culture at the core.
              </p>
              
              <div className={styles.heroCta}>
                <div className={styles.heroButtons}>
                  <button 
                    className={styles.btnHeroPrimary}
                    onClick={handleCalculatorClick}
                  >
                    <span className={styles.btnText}>Calculate Your Savings</span>
                    <span className={styles.btnSubtext}>Instant Cost Analysis →</span>
                  </button>
                  
                  <a 
                    href="#consultation" 
                    className={styles.btnHeroSecondary}
                    onClick={handleSecondaryClick}
                  >
                    Free Strategy Session
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.heroStats}>
              <div className={styles.statsText}>
                <span className={styles.statsHighlight}>Founded by UK Civil Service Leaders</span>
                <span className={styles.statsMain}>50+ UK SMEs trust our expertise</span>
                <span className={styles.statsSub}>4.9/5 client satisfaction with GDPR-compliant operations</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImageContainer}>
              {!imageError ? (
                <Image
                  src="/hero-image.jpg" // Replace with your image path
                  alt="Aetherbloom Business Outsourcing"
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className={styles.heroImagePlaceholder}>
                  <div className={styles.imageOverlay}></div>
                </div>
              )}
            </div>
          </div>
          
          {/* <div className={styles.heroVisual}>
            <div className={styles.heroImageContainer}>
              <div className={styles.heroImagePlaceholder}>
                <div className={styles.imageOverlay}></div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Calculator Modal */}
      {isCalculatorModalOpen && (
        <div 
          className={styles.modal}
          onClick={handleModalClick}
          onKeyDown={handleKeyDown}
          tabIndex="-1"
        >
          <div className={styles.modalContent}>
            <button 
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <h3 className={styles.modalTitle}>Cost Calculator</h3>
            <p className={styles.modalDescription}>
              Calculate your potential savings with Aetherbloom's BPO solutions.
            </p>
            <button 
              className={styles.modalButton}
              onClick={closeModal}
            >
              Coming Soon - Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}