/**
 * @file FeatureCard.jsx
 * @description Single feature card component
 *
 * @role
 * - Displays individual feature with icon
 * - Hover effect with slight lift
 * - Glass card styling
 *
 * @exports
 * - FeatureCard: React Component
 *
 * @props
 * - icon: ReactNode | String - Lucide icon name or component
 * - title: String - Feature title
 * - description: String - Feature description
 * - index: Number - For staggered animation delay
 *
 * @imports
 * - GlassCard (from '../ui/GlassCard.jsx')
 * - { motion } (from 'framer-motion')
 * - * as Icons (from 'lucide-react') - Dynamic icon loading
 *
 * @usedBy
 * - components/landing/Features.jsx
 */
