/**
 * @file ProjectSearch.jsx
 * @description Search and filter component for projects
 *
 * @role
 * - Text search input for filtering projects
 * - Debounced search to avoid excessive filtering
 *
 * @exports
 * - ProjectSearch: React Component
 *
 * @props
 * - value: String - Search input value
 * - onChange: Function - Search change handler
 *
 * @imports
 * - Input (from '../common/Input.jsx')
 * - { useDebounce } (from '../../hooks/useDebounce.js')
 * - { Search } (from 'lucide-react')
 *
 * @usedBy
 * - pages/DashboardPage.jsx
 */
