/**
 * @file FAQ.jsx
 * @description FAQ accordion section
 *
 * @role
 * - Displays frequently asked questions
 * - Collapsible accordion items
 * - Smooth expand/collapse animation
 *
 * @exports
 * - FAQ: React Component
 *
 * @structure
 * - Section title
 * - List of FAQItem components
 *
 * @state
 * - openIndex: Currently open FAQ index (or null)
 *
 * @imports
 * - { useState } (from 'react')
 * - FAQItem (from './FAQItem.jsx')
 * - ScrollReveal (from '../ui/ScrollReveal.jsx')
 * - PageContainer (from '../layout/PageContainer.jsx')
 * - { faqData } (from '../../data/faqData.js')
 *
 * @usedBy
 * - pages/LandingPage.jsx
 */
