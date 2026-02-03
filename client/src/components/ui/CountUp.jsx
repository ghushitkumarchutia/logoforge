/**
 * @file CountUp.jsx
 * @description Animated number counter component
 *
 * @role
 * - Animates numbers counting up from 0 to target
 * - Triggers when scrolled into view
 * - Used for statistics section
 *
 * @exports
 * - CountUp: React Component
 *
 * @props
 * - end: Number - Target number to count to
 * - start: Number - Starting number (default: 0)
 * - duration: Number in seconds (default: 2)
 * - prefix: String - Text before number (e.g., '$')
 * - suffix: String - Text after number (e.g., '+', 'K')
 * - decimals: Number - Decimal places (default: 0)
 * - className: String - Additional classes
 *
 * @imports
 * - { useState, useEffect, useRef } (from 'react')
 * - { useInView } (from 'framer-motion')
 *
 * @usedBy
 * - components/landing/Stats.jsx
 */
