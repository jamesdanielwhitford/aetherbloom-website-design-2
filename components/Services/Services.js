// File: components/Services.js

import { useState } from 'react'
import Image from 'next/image'
import styles from './Services.module.css'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const services = [
    {
      id: 'customer',
      icon: '📞',
      title: 'Customer Support',
      subtitle: 'Omnichannel Excellence',
      details: {
        title: "Customer Support Services",
        description: "Omnichannel customer support with UK-trained teams fluent in British communication standards. We handle phone, email, chat, and social media support with 24/7 availability.",
        features: [
          "24/7 Omnichannel Support",
          "UK Compliance & GDPR Training",
          "92% English Fluency Rate",
          "Real-time Performance Dashboards"
        ]
      }
    },
    {
      id: 'backoffice',
      icon: '📋',
      title: 'Back Office Operations',
      subtitle: 'Admin & Finance',
      details: {
        title: "Back Office Operations",
        description: "Comprehensive back-office support including data entry, administrative tasks, finance operations, and HR support. All processes designed with UK compliance standards.",
        features: [
          "Data Entry & Processing",
          "Administrative Support",
          "Finance & Accounting",
          "HR Operations Support"
        ]
      }
    },
    {
      id: 'technical',
      icon: '🔧',
      title: 'Technical Support',
      subtitle: 'Tiered IT Helpdesk',
      details: {
        title: "Technical Support Services",
        description: "Tiered IT helpdesk and software support from South Africa's top STEM graduates. Expert technical assistance with UK service standards.",
        features: [
          "Tiered IT Helpdesk (L1-L3)",
          "Software Support & Troubleshooting",
          "STEM Graduate Expertise",
          "UK Technical Standards"
        ]
      }
    },
    {
      id: 'sales',
      icon: '📈',
      title: 'Sales Support',
      subtitle: 'Lead Generation & CRM',
      details: {
        title: "Sales Support Services",
        description: "Comprehensive sales support including lead generation, CRM management, and appointment setting. Boost your sales pipeline with our dedicated teams.",
        features: [
          "Lead Generation & Qualification",
          "CRM Management & Updates",
          "Appointment Setting",
          "Sales Pipeline Support"
        ]
      }
    }
  ]

  const handleServiceClick = (service) => {
    setSelectedService(service)
  }

  const handleGetQuoteClick = (e) => {
    const href = e.target.getAttribute('href')
    if (href && href.startsWith('#')) {
      e.preventDefault()
      setIsQuoteModalOpen(true)
    }
  }

  const closeServiceModal = () => {
    setSelectedService(null)
  }

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false)
  }

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeServiceModal()
      closeQuoteModal()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeServiceModal()
      closeQuoteModal()
    }
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      const serviceId = e.currentTarget.getAttribute('data-service')
      const service = services.find(s => s.id === serviceId)
      if (service) {
        handleServiceClick(service)
      }
    }
  }

  const handleLogoError = () => {
    setLogoError(true)
  }

  return (
    <>
      <section className={styles.services} id="services">
        <div className={styles.servicesContainer}>
          <div className={styles.servicesLayout}>
            <div className={styles.servicesLeft}>
              <div className={styles.servicesHeader}>
                <h2 className={styles.servicesTitle}>Comprehensive BPO Solutions</h2>
                <p className={styles.servicesSubtitle}>
                  Tailored by <span className={styles.servicesAccent}>UK Civil Service Expertise</span>
                </p>
                <p className={styles.servicesDescription}>
                  We deliver expertly managed business process outsourcing across all critical functions, 
                  with UK compliance standards and South Africa's top talent.
                </p>
                <a 
                  href="#get-quote" 
                  className={styles.btnServicesCta}
                  onClick={handleGetQuoteClick}
                >
                  Get Quote
                </a>
              </div>
            </div>
            
            <div className={styles.servicesRight}>
              <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`${styles.serviceCard} ${styles[`serviceCard${index + 1}`]}`}
                    data-service={service.id}
                    onClick={() => handleServiceClick(service)}
                    onKeyDown={handleKeyDown}
                    tabIndex="0"
                  >
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <div className={styles.serviceTitle}>{service.title}</div>
                    <div className={styles.serviceSubtitle}>{service.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          className={styles.modal}
          onClick={handleModalClick}
          onKeyDown={handleKeyDown}
          tabIndex="-1"
        >
          <div className={styles.modalContent}>
            <button 
              className={styles.modalClose}
              onClick={closeServiceModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <h3 className={styles.modalTitle}>{selectedService.details.title}</h3>
            <p className={styles.modalDescription}>
              {selectedService.details.description}
            </p>
            <h4 className={styles.modalFeaturesTitle}>Key Features:</h4>
            <ul className={styles.modalFeaturesList}>
              {selectedService.details.features.map((feature, index) => (
                <li key={index} className={styles.modalFeature}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
            <div className={styles.modalButtons}>
              <button 
                className={styles.modalButtonPrimary}
                onClick={closeServiceModal}
              >
                Get Started
              </button>
              <button 
                className={styles.modalButtonSecondary}
                onClick={closeServiceModal}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div 
          className={styles.modal}
          onClick={handleModalClick}
          onKeyDown={handleKeyDown}
          tabIndex="-1"
        >
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Request a Quote</h3>
            <p className={styles.modalDescription}>
              Get a personalized quote for your BPO needs. Our team will contact you within 24 hours.
            </p>
            <div className={styles.modalButtons}>
              <button 
                className={styles.modalButtonPrimary}
                onClick={closeQuoteModal}
              >
                Contact Sales Team
              </button>
              <button 
                className={styles.modalButtonSecondary}
                onClick={closeQuoteModal}
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