/**
 * @file LoginForm.jsx
 * @description Login form component with validation
 *
 * @role
 * - Handles user login with email and password
 * - Client-side validation before submission
 * - Displays error messages from server
 * - Loading state during submission
 *
 * @exports
 * - LoginForm: React Component
 *
 * @state
 * - email: String
 * - password: String
 * - errors: Object with field errors
 * - isLoading: Boolean
 *
 * @imports
 * - { useState } (from 'react')
 * - { Link } (from 'react-router-dom')
 * - { useAuth } (from '../../hooks/useAuth.js')
 * - Input (from '../common/Input.jsx')
 * - Button (from '../common/Button.jsx')
 * - { validateEmail, validateRequired } (from '../../utils/validators.js')
 * - toast (from 'react-hot-toast')
 * - { Mail, Lock } (from 'lucide-react')
 *
 * @usedBy
 * - pages/LoginPage.jsx
 */
