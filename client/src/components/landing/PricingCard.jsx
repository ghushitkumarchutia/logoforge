/**
 * @file PricingCard.jsx
 * @description Single pricing plan card
 *
 * @role
 * - Displays individual pricing tier
 * - Shows price, features list, CTA button
 * - Highlighted styling for recommended plan
 *
 * @exports
 * - PricingCard: React Component
 *
 * @props
 * - name: String - Plan name
 * - price: String - Price display
 * - period: String - Billing period
 * - description: String - Short description
 * - features: Array of strings - Feature list
 * - highlighted: Boolean - Is recommended plan
 * - buttonText: String - CTA text
 * - buttonVariant: 'primary' | 'secondary'
 *
 * @imports
 * - { Link } (from 'react-router-dom')
 * - GlassCard (from '../ui/GlassCard.jsx')
 * - GradientButton (from '../ui/GradientButton.jsx')
 * - Button (from '../common/Button.jsx')
 * - Badge (from '../common/Badge.jsx')
 * - { Check } (from 'lucide-react')
 *
 * @usedBy
 * - components/landing/Pricing.jsx
 */
