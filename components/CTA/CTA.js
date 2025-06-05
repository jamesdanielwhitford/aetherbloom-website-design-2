// File: components/CTA/CTA.js

import { useState } from 'react'
import styles from './CTA.module.css'

export default function CTA() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  const handleGetStartedClick = () => {
    const consultationSection = document.querySelector('#contact')
    if (consultationSection) {
      consultationSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      // If no contact section exists, open modal
      setIsConsultationModalOpen(true)
    }
  }

  const handleFreeTaskIdeasClick = () => {
    setIsConsultationModalOpen(true)
  }

  const closeModal = () => {
    setIsConsultationModalOpen(false)
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
      <section className={styles.cta} id="consultation">
        <div className={styles.ctaContainer}>
          <div className={styles.ctaLayout}>
            {/* Left Side - Main CTA */}
            <div className={styles.ctaLeft}>
              <h2 className={styles.ctaTitle}>
                Ready to scale your UK business?
                Start by seeing how our strategic outsourcing can assist you
              </h2>
              <p className={styles.ctaSubtitle}>
                Get instant, personalized insights into how Aetherbloom's UK-grade BPO solutions can transform your operations.
              </p>
            </div>

            {/* Right Side - Action Items */}
            <div className={styles.ctaRight}>
              <div className={styles.ctaCard}>
                <p className={styles.cardText}>
                  Answer a few <strong>simple questions</strong> and we'll instantly show you exactly 
                  <strong> how strategic outsourcing can help you</strong> and your business.
                </p>
                <button 
                  className={styles.btnPrimary}
                  onClick={handleFreeTaskIdeasClick}
                >
                  See What I Can Outsource
                </button>
                <p className={styles.cardSubtext}>
                  Get instant, personalized task ideas
                </p>
              </div>
              
              <div className={styles.ctaAlternative}>
                <button 
                  className={styles.btnSecondary}
                  onClick={handleGetStartedClick}
                >
                  Or book a consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
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
            <h3 className={styles.modalTitle}>Free Strategy Session</h3>
            <p className={styles.modalDescription}>
              Speak with our UK Civil Service experts to discover how you can cut costs by 40%+ while scaling your operations with South Africa's top talent.
            </p>
            <div className={styles.modalFeatures}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>Personalized cost analysis</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>UK compliance roadmap</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>No obligation assessment</span>
              </div>
            </div>
            <div className={styles.modalButtons}>
              <button 
                className={styles.modalButtonPrimary}
                onClick={closeModal}
              >
                Schedule My Free Session
              </button>
              <button 
                className={styles.modalButtonSecondary}
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}