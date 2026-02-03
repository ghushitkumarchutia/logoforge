/**
 * @file Input.jsx
 * @description Reusable input field component with label and error
 *
 * @role
 * - Provides consistent form input styling
 * - Displays label, error message, and helper text
 * - Supports icons and different input types
 *
 * @exports
 * - Input: React Component
 *
 * @props
 * - label: String - Input label
 * - name: String - Input name (required)
 * - type: String - Input type (default: 'text')
 * - placeholder: String - Placeholder text
 * - value: String - Input value
 * - onChange: Function - Change handler
 * - error: String - Error message to display
 * - helperText: String - Helper text below input
 * - leftIcon: ReactNode - Icon inside input (left)
 * - rightIcon: ReactNode - Icon inside input (right)
 * - disabled: Boolean - Disable input
 * - required: Boolean - Mark as required
 * - className: String - Additional classes
 * - ...rest: Other input props
 *
 * @styling
 * - Uses Tailwind CSS classes
 * - Error state with red border and text
 * - Focus ring on focus
 *
 * @imports
 * - clsx (from 'clsx') - Class composition
 *
 * @usedBy
 * - components/auth/LoginForm.jsx
 * - components/auth/RegisterForm.jsx
 * - components/dashboard/ProjectSearch.jsx
 * - components/editor/modals/SaveProjectModal.jsx
 */
