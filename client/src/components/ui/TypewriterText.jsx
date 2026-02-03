/**
 * @file TypewriterText.jsx
 * @description Typing animation text component
 *
 * @role
 * - Animates text with typewriter effect
 * - Can cycle through multiple words/phrases
 * - Cursor blink animation
 *
 * @exports
 * - TypewriterText: React Component
 *
 * @props
 * - words: Array of strings to cycle through
 * - typingSpeed: Number in ms (default: 100)
 * - deletingSpeed: Number in ms (default: 50)
 * - pauseDelay: Number in ms before deleting (default: 2000)
 * - loop: Boolean - Cycle through words (default: true)
 * - className: String - Additional classes
 * - cursorClassName: String - Cursor styling
 *
 * @state
 * - currentWordIndex: Number
 * - currentText: String
 * - isDeleting: Boolean
 *
 * @imports
 * - { useState, useEffect } (from 'react')
 *
 * @usedBy
 * - components/landing/Hero.jsx
 */
