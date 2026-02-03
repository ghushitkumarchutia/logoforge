/**
 * @file Navbar.jsx
 * @description Main navigation bar component
 *
 * @role
 * - Displays logo, navigation links, and actions
 * - Shows different links based on auth state
 * - Includes theme toggle and user dropdown
 * - Responsive with mobile hamburger menu
 *
 * @exports
 * - Navbar: React Component
 *
 * @features
 * - Logo linking to home
 * - Navigation links (conditional on auth)
 * - Theme toggle button
 * - Mobile menu trigger
 * - User dropdown when logged in
 * - Transparent/solid scroll behavior
 *
 * @imports
 * - { useState } (from 'react')
 * - { Link, useLocation } (from 'react-router-dom')
 * - { useAuth } (from '../../hooks/useAuth.js')
 * - { useTheme } (from '../../hooks/useTheme.js')
 * - ThemeToggle (from '../common/ThemeToggle.jsx')
 * - Button (from '../common/Button.jsx')
 * - Dropdown (from '../common/Dropdown.jsx')
 * - MobileMenu (from './MobileMenu.jsx')
 * - { Menu, X, User, LogOut } (from 'lucide-react')
 *
 * @usedBy
 * - pages/LandingPage.jsx
 * - pages/DashboardPage.jsx
 * - App.jsx (persistent navbar)
 */
