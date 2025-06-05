// File: components/Testimonials/Testimonials.js

import { useState, useEffect } from 'react'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [activeConversation, setActiveConversation] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const conversations = [
    {
      id: 1,
      messages: [
        {
          type: 'aetherbloom',
          name: 'Grace',
          role: 'Client Success Manager',
          company: 'Aetherbloom',
          avatar: '👩‍💼',
          message: "How has the transition been for your customers since we took over support?",
        },
        {
          type: 'client',
          name: 'Sarah Chen',
          role: 'Operations Director',
          company: 'TechFlow Solutions',
          avatar: '👩‍💼',
          message: "Seamless! Our CSAT scores actually improved by 15%. It feels like an extension of our London office rather than outsourcing.",
        }
      ]
    },
    {
      id: 2,
      messages: [
        {
          type: 'aetherbloom',
          name: 'Della',
          role: 'Solutions Director',
          company: 'Aetherbloom',
          avatar: '👩‍💻',
          message: "How accurate was our cost calculator for your actual savings?",
        },
        {
          type: 'client',
          name: 'Marcus Williams',
          role: 'Finance Director',
          company: 'GrowthVenture Ltd',
          avatar: '👨‍💼',
          message: "Spot on! We're saving £42k annually. Your team knew our compliance requirements better than some UK providers we'd worked with before.",
        }
      ]
    },
    {
      id: 3,
      messages: [
        {
          type: 'aetherbloom',
          name: 'Grace',
          role: 'Client Success Manager',
          company: 'Aetherbloom',
          avatar: '👩‍💼',
          message: "How's the technical support team performing for you?",
        },
        {
          type: 'client',
          name: 'Emma Thompson',
          role: 'Chief Technology Officer',
          company: 'InnovateTech',
          avatar: '👩‍💻',
          message: "Incredible! Level 1-3 support all handled flawlessly. Response times improved 40% and our internal IT team can focus on strategic projects now.",
        }
      ]
    }
  ]

  const trustedCompanies = [
    { name: 'TechFlow', logo: '🚀' },
    { name: 'GrowthVenture', logo: '📈' },
    { name: 'InnovateTech', logo: '💡' },
    { name: 'DigitalFirst', logo: '💻' },
    { name: 'ScaleUp', logo: '⚡' }
  ]

  // Reset and start new conversation
  const startConversation = (conversationIndex) => {
    setActiveConversation(conversationIndex)
    setVisibleMessages([])
    setCurrentMessageIndex(0)
  }

  // Show messages sequentially
  useEffect(() => {
    if (currentMessageIndex < conversations[activeConversation].messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, currentMessageIndex])
        setCurrentMessageIndex(prev => prev + 1)
      }, currentMessageIndex === 0 ? 500 : 2000) // First message starts after 500ms, second after 2s

      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, activeConversation, conversations])

  // Auto-advance to next conversation
  useEffect(() => {
    if (currentMessageIndex >= conversations[activeConversation].messages.length) {
      const timer = setTimeout(() => {
        const nextConversation = (activeConversation + 1) % conversations.length
        startConversation(nextConversation)
      }, 2500) // Wait 2.5 seconds after last message before starting next conversation

      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, activeConversation, conversations.length])

  // Initialize first conversation
  useEffect(() => {
    startConversation(0)
  }, [])

  const handleConversationClick = (index) => {
    if (index !== activeConversation) {
      startConversation(index)
    }
  }

  const currentConversation = conversations[activeConversation]

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsLayout}>
          {/* Left Side - Content */}
          <div className={styles.testimonialsLeft}>
            <div className={styles.testimonialsContent}>
              <h2 className={styles.testimonialsTitle}>
                Real conversations with <span className={styles.titleAccent}>real results</span>
              </h2>
              <p className={styles.testimonialsSubtitle}>
                See how UK businesses are transforming their operations with our 
                strategic outsourcing solutions. Trusted by 50+ SMEs across the UK.
              </p>

              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Client Satisfaction</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>40%+</span>
                  <span className={styles.statLabel}>Cost Reduction</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Support Available</span>
                </div>
              </div>

              <div className={styles.conversationDots}>
                {conversations.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${index === activeConversation ? styles.activeDot : ''}`}
                    onClick={() => handleConversationClick(index)}
                    aria-label={`View conversation ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Chat Bubbles */}
          <div className={styles.testimonialsRight}>
            <div className={styles.chatArea}>
              {currentConversation.messages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.messageContainer} ${styles[message.type]} ${
                    visibleMessages.includes(index) ? styles.visible : styles.hidden
                  }`}
                >
                  <div className={styles.speechBubble}>
                    <p className={styles.messageText}>{message.message}</p>
                  </div>
                  <div className={styles.messageProfile}>
                    <div className={styles.profileAvatar}>{message.avatar}</div>
                    <div className={styles.profileInfo}>
                      <span className={styles.profileName}>{message.name}</span>
                      <span className={styles.profileCompany}>{message.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className={styles.trustedSection}>
          <p className={styles.trustedLabel}>Trusted by forward-thinking UK businesses</p>
          <div className={styles.trustedCompanies}>
            {trustedCompanies.map((company, index) => (
              <div key={index} className={styles.companyLogo}>
                <span className={styles.logoIcon}>{company.logo}</span>
                <span className={styles.logoText}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}