/**
 * @file Hero.jsx
 * @description Hero section component for landing page
 *
 * @role
 * - First section visitors see
 * - Displays headline, tagline, and CTAs
 * - Includes typewriter animation and mockup
 *
 * @exports
 * - Hero: React Component
 *
 * @structure
 * - AnimatedBackground (behind content)
 * - Main headline with GradientText
 * - Tagline with TypewriterText cycling words
 * - Primary CTA (Get Started) and Secondary CTA (See Demo)
 * - HeroMockup (editor preview)
 *
 * @imports
 * - { Link } (from 'react-router-dom')
 * - AnimatedBackground (from '../ui/AnimatedBackground.jsx')
 * - GradientText (from '../common/GradientText.jsx')
 * - GradientButton (from '../ui/GradientButton.jsx')
 * - TypewriterText (from '../ui/TypewriterText.jsx')
 * - HeroMockup (from './HeroMockup.jsx')
 * - { heroContent } (from '../../data/landingContent.js')
 * - { motion } (from 'framer-motion')
 *
 * @usedBy
 * - pages/LandingPage.jsx
 */
