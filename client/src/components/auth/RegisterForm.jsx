/**
 * @file RegisterForm.jsx
 * @description Registration form component with validation
 *
 * @role
 * - Handles user registration with username, email, password
 * - Client-side validation (matches server rules)
 * - Password confirmation field
 * - Loading state during submission
 *
 * @exports
 * - RegisterForm: React Component
 *
 * @state
 * - username: String
 * - email: String
 * - password: String
 * - confirmPassword: String
 * - errors: Object with field errors
 * - isLoading: Boolean
 *
 * @imports
 * - { useState } (from 'react')
 * - { Link } (from 'react-router-dom')
 * - { useAuth } (from '../../hooks/useAuth.js')
 * - Input (from '../common/Input.jsx')
 * - Button (from '../common/Button.jsx')
 * - { validateEmail, validatePassword, validateUsername, validatePasswordMatch } (from '../../utils/validators.js')
 * - toast (from 'react-hot-toast')
 * - { User, Mail, Lock } (from 'lucide-react')
 *
 * @usedBy
 * - pages/RegisterPage.jsx
 */
