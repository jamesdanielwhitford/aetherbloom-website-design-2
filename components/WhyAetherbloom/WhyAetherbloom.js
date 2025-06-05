// File: components/WhyAetherbloom.js

import { useState } from 'react'
import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const [activeFeature, setActiveFeature] = useState('leadership')

  const features = [
    { id: 'leadership', label: 'UK Civil Service leadership' },
    { id: 'compliance', label: 'GDPR compliance' },
    { id: 'analytics', label: 'Data-driven matching' },
    { id: 'transparency', label: 'Transparent pricing' },
    { id: 'talent', label: 'Top STEM graduates' },
    { id: 'fluency', label: '92% English fluency' },
    { id: 'cost', label: '40% cost reduction' },
    { id: 'impact', label: 'Ethical impact' }
  ]

  const details = {
    leadership: {
      title: "Founded by UK Civil Service Experts",
      description: "Our leadership team brings decades of UK public sector experience, ensuring your outsourcing operations meet the highest standards of governance, compliance, and professional excellence."
    },
    compliance: {
      title: "Pre-Trained in UK Compliance Standards",
      description: "All our BPO teams are extensively trained in GDPR, ISO standards, and UK regulatory requirements before they join your operations, ensuring seamless compliance from day one."
    },
    analytics: {
      title: "20% Faster Talent Matching",
      description: "Our proprietary analytics platform matches your specific requirements with the perfect South African professionals 20% faster than traditional recruitment methods."
    },
    transparency: {
      title: "No Hidden Fees, Real-Time Reporting",
      description: "Transparent SLAs with real consequences, live performance dashboards, and upfront pricing. What you see is what you get—no surprises, ever."
    },
    talent: {
      title: "Africa's #1 for STEM Graduates",
      description: "South Africa ranks #1 in Africa for STEM graduates (QS Rankings), giving you access to a highly skilled, technically proficient workforce at competitive rates."
    },
    fluency: {
      title: "92% Professional English Fluency",
      description: "Our workforce demonstrates exceptional English communication skills, ensuring seamless integration with your UK operations and customers."
    },
    cost: {
      title: "Premium Talent at 40% Lower Costs",
      description: "Access world-class professionals while reducing operational costs by over 40%, allowing you to scale efficiently without compromising on quality."
    },
    impact: {
      title: "Ethical Outsourcing with Real Impact",
      description: "Every partnership creates meaningful employment opportunities for South African youth through our job readiness programs, internships, and leadership development initiatives."
    }
  }

  const handleFeatureHover = (featureId) => {
    setActiveFeature(featureId)
  }

  const handleKeyDown = (e, featureId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveFeature(featureId)
    }
  }

  return (
    <section className={styles.whyAetherbloom} id="why-aetherbloom">
      <div className={styles.whyContainer}>
        <div className={styles.whyLayout}>
          <div className={styles.whyLeft}>
            <div className={styles.featureDetails}>
              {Object.entries(details).map(([key, detail]) => (
                <div 
                  key={key}
                  className={`${styles.detailCard} ${activeFeature === key ? styles.active : ''}`}
                >
                  <h3>{detail.title}</h3>
                  <p>{detail.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.whyRight}>
            <div className={styles.whyHeader}>
              <h2 className={styles.whyTitle}>
                All the expertise, <span className={styles.whyTitleAccent}>none of the complexity</span>
              </h2>
              <p className={styles.whySubtitle}>
                Aetherbloom delivers UK-grade outsourcing excellence through 
                South Africa's premier talent pool, all in one streamlined solution.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.whyFeatures}>
          <div className={styles.featuresRow}>
            {features.slice(0, 4).map((feature) => (
              <div
                key={feature.id}
                className={`${styles.featureTag} ${activeFeature === feature.id ? styles.active : ''}`}
                onMouseEnter={() => handleFeatureHover(feature.id)}
                onKeyDown={(e) => handleKeyDown(e, feature.id)}
                tabIndex="0"
              >
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
          
          <div className={styles.featuresRow}>
            {features.slice(4).map((feature) => (
              <div
                key={feature.id}
                className={`${styles.featureTag} ${activeFeature === feature.id ? styles.active : ''}`}
                onMouseEnter={() => handleFeatureHover(feature.id)}
                onKeyDown={(e) => handleKeyDown(e, feature.id)}
                tabIndex="0"
              >
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}