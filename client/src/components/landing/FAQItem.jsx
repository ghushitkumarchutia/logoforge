/**
 * @file FAQItem.jsx
 * @description Single FAQ accordion item
 *
 * @role
 * - Shows question with expand/collapse toggle
 * - Reveals answer when expanded
 * - Animated height transition
 *
 * @exports
 * - FAQItem: React Component
 *
 * @props
 * - question: String - FAQ question
 * - answer: String - FAQ answer
 * - isOpen: Boolean - Whether item is expanded
 * - onClick: Function - Toggle handler
 *
 * @imports
 * - { motion, AnimatePresence } (from 'framer-motion')
 * - { ChevronDown } (from 'lucide-react')
 *
 * @usedBy
 * - components/landing/FAQ.jsx
 */
