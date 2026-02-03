/**
 * @file Testimonials.jsx
 * @description Testimonials carousel section
 *
 * @role
 * - Displays user testimonials in carousel/slider
 * - Auto-rotating with manual navigation
 * - Parallax background effect
 *
 * @exports
 * - Testimonials: React Component
 *
 * @structure
 * - Section title
 * - Carousel of TestimonialCard components
 * - Navigation dots/arrows
 *
 * @state
 * - activeIndex: Current testimonial index
 *
 * @imports
 * - { useState, useEffect } (from 'react')
 * - TestimonialCard (from './TestimonialCard.jsx')
 * - ParallaxSection (from '../ui/ParallaxSection.jsx')
 * - PageContainer (from '../layout/PageContainer.jsx')
 * - { testimonials } (from '../../data/testimonials.js')
 * - { motion, AnimatePresence } (from 'framer-motion')
 * - { ChevronLeft, ChevronRight } (from 'lucide-react')
 *
 * @usedBy
 * - pages/LandingPage.jsx
 */
