// File: components/PricingCalculator/PricingCalculator.js

import { useState } from 'react'
import styles from './PricingCalculator.module.css'

export default function PricingCalculator() {
  const [selectedRole, setSelectedRole] = useState('')
  const [customSalary, setCustomSalary] = useState('')
  const [hoursPerWeek, setHoursPerWeek] = useState('40')
  const [selectedTier, setSelectedTier] = useState('')
  const [results, setResults] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Consistent number formatting function to avoid hydration mismatch
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const roles = [
    { name: 'Admin Assistant', salary: 25000 },
    { name: 'Customer Service Rep', salary: 26000 },
    { name: 'Data Entry Specialist', salary: 24000 },
    { name: 'Bookkeeper', salary: 30000 },
    { name: 'Technical Support', salary: 32000 },
    { name: 'Data Analyst', salary: 38000 },
    { name: 'Software Developer', salary: 45000 }
  ]

  const tiers = [
    { 
      id: 'essentials', 
      name: 'Digital Essentials', 
      description: '20 hrs/month', 
      price: 360, 
      annualCost: 4320 
    },
    { 
      id: 'growth', 
      name: 'Digital Growth', 
      description: '30 hrs/month', 
      price: 500, 
      annualCost: 6000 
    },
    { 
      id: 'enterprise', 
      name: 'Digital Enterprise', 
      description: '50 hrs/month', 
      price: 730, 
      annualCost: 8760 
    },
    { 
      id: 'engagement', 
      name: 'Call Centre Engagement', 
      description: '40 hrs/week', 
      price: 1600, 
      annualCost: 19200 
    },
    { 
      id: 'sales', 
      name: 'Sales Accelerator', 
      description: '3 dedicated agents', 
      price: 5000, 
      annualCost: 60000 
    }
  ]

  const handleRoleChange = (e) => {
    const roleName = e.target.value
    setSelectedRole(roleName)
    
    const role = roles.find(r => r.name === roleName)
    if (role) {
      setCustomSalary(role.salary.toString())
    }
  }

  const calculateSavings = () => {
    const salary = parseFloat(customSalary)
    const hours = parseFloat(hoursPerWeek)
    const tier = tiers.find(t => t.id === selectedTier)

    if (!salary || !hours || !tier) {
      alert('Please complete all fields before calculating.')
      return
    }

    setIsCalculating(true)
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      // UK cost assumptions based on industry standards
      const niPension = salary * 0.13 // National Insurance + Pension contributions
      const recruitment = salary * 0.15 // Recruitment and onboarding costs
      const training = salary * 0.05 // Initial and ongoing training
      const hrOverhead = salary * 0.10 // HR management and admin overhead
      const fixedCosts = 3600 + 1200 + 600 // Office space + IT setup + Benefits = £5400

      const ukTotalCost = salary + niPension + recruitment + training + hrOverhead + fixedCosts
      const aetherbloomCost = tier.annualCost
      const totalSavings = ukTotalCost - aetherbloomCost
      const savingsPercentage = ((totalSavings / ukTotalCost) * 100).toFixed(1)

      setResults({
        salary,
        ukTotalCost,
        aetherbloomCost,
        totalSavings,
        savingsPercentage,
        tierName: tier.name,
        tierDescription: tier.description
      })
      
      setIsCalculating(false)
    }, 800)
  }

  const handleGetStarted = () => {
    const consultationSection = document.querySelector('#contact')
    if (consultationSection) {
      consultationSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const resetCalculator = () => {
    setResults(null)
  }

  return (
    <section className={styles.pricingCalculator} id="pricing">
      <div className={styles.calculatorContainer}>
        <div className={styles.calculatorLayout}>
          {/* Left Side - Calculator Form */}
          <div className={styles.calculatorLeft}>
            <div className={styles.calculatorCard}>
              <div className={styles.calculatorForm}>
                <div className={styles.formSection}>
                  <label className={styles.formLabel} htmlFor="role-select">
                    Select Role Type
                  </label>
                  <select 
                    id="role-select"
                    className={styles.formSelect}
                    value={selectedRole}
                    onChange={handleRoleChange}
                  >
                    <option value="">Choose a role...</option>
                    {roles.map((role) => (
                      <option key={role.name} value={role.name}>
                        {role.name} (£{formatNumber(role.salary)})
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formSection}>
                    <label className={styles.formLabel} htmlFor="salary-input">
                      Annual Salary (£)
                    </label>
                    <input
                      id="salary-input"
                      type="number"
                      className={styles.formInput}
                      placeholder="e.g. 28,000"
                      value={customSalary}
                      onChange={(e) => setCustomSalary(e.target.value)}
                    />
                  </div>

                  <div className={styles.formSection}>
                    <label className={styles.formLabel} htmlFor="hours-input">
                      Hours per Week
                    </label>
                    <input
                      id="hours-input"
                      type="number"
                      className={styles.formInput}
                      placeholder="e.g. 40"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.formSection}>
                  <label className={styles.formLabel} htmlFor="tier-select">
                    Aetherbloom Service Tier
                  </label>
                  <select 
                    id="tier-select"
                    className={styles.formSelect}
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                  >
                    <option value="">Choose a service tier...</option>
                    {tiers.map((tier) => (
                      <option key={tier.id} value={tier.id}>
                        {tier.name} ({tier.description} – £{tier.price}/mo)
                      </option>
                    ))}
                  </select>
                </div>

                <button 
                  className={styles.calculateButton}
                  onClick={calculateSavings}
                  disabled={isCalculating}
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Savings'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Text/Results */}
          <div className={styles.calculatorRight}>
            {!results ? (
              <div className={styles.calculatorContent}>
                <h2 className={styles.calculatorTitle}>
                  Calculate Your <span className={styles.titleAccent}>Potential Savings</span>
                </h2>
                <p className={styles.calculatorSubtitle}>
                  Discover how much you could save annually with our UK-grade outsourcing solutions powered by South Africa's top talent.
                </p>
              </div>
            ) : (
              <div className={styles.resultsSection}>
                <div className={styles.resultsHeader}>
                  <h3 className={styles.resultsTitle}>Your Estimated Annual Savings</h3>
                  <div className={styles.savingsHighlight}>
                    <span className={styles.savingsAmount}>£{formatNumber(results.totalSavings)}</span>
                    <span className={styles.savingsPercentage}>{results.savingsPercentage}% saved</span>
                  </div>
                </div>
                
                <div className={styles.resultsBreakdown}>
                  <div className={styles.costComparison}>
                    <div className={styles.costItem}>
                      <span className={styles.costLabel}>UK Employee (Total Cost)</span>
                      <span className={styles.costValue}>£{formatNumber(results.ukTotalCost)}</span>
                    </div>
                    <div className={styles.costItem}>
                      <span className={styles.costLabel}>Aetherbloom ({results.tierName})</span>
                      <span className={styles.costValue}>£{formatNumber(results.aetherbloomCost)}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.resultsFooter}>
                  <p className={styles.resultsNote}>
                    *Calculation includes salary, NI, pension, recruitment, training, HR overhead, and operational costs.
                  </p>
                  <div className={styles.resultsButtons}>
                    <button 
                      className={styles.getStartedButton}
                      onClick={handleGetStarted}
                    >
                      Get Your Free Strategy Session
                    </button>
                    <button 
                      className={styles.recalculateButton}
                      onClick={resetCalculator}
                    >
                      Calculate Again
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}