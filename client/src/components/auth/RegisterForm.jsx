import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validatePasswordMatch,
} from "../../utils/validators";
import toast from "react-hot-toast";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

const AuthInput = ({
  id,
  label,
  type = "text",
  icon: Icon,
  placeholder,
  value,
  onChange,
  error,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div>
      <label
        htmlFor={id}
        className='block text-[13px] font-medium text-neutral-700 dark:text-neutral-300 mb-1.5'
      >
        {label}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400'>
          <Icon size={16} />
        </div>
        <input
          id={id}
          name={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='w-full pl-10 pr-10 py-2.5 rounded-[10px] border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent transition-colors'
        />
        {isPassword && (
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
      {helperText && !error && (
        <p className='mt-1 text-xs text-neutral-400'>{helperText}</p>
      )}
    </div>
  );
};

export const RegisterForm = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const uv = validateUsername(username);
    if (!uv.isValid) newErrors.username = uv.message;
    const ev = validateEmail(email);
    if (!ev.isValid) newErrors.email = ev.message;
    const pv = validatePassword(password);
    if (!pv.isValid) newErrors.password = pv.message;
    const cv = validatePasswordMatch(password, confirmPassword);
    if (!cv.isValid) newErrors.confirmPassword = cv.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await register(username, email, password);
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(error.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <AuthInput
        id='username'
        label='Username'
        icon={User}
        placeholder='Choose a username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
      />
      <AuthInput
        id='email'
        label='Email'
        type='email'
        icon={Mail}
        placeholder='you@example.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <AuthInput
        id='password'
        label='Password'
        type='password'
        icon={Lock}
        placeholder='Create a password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        helperText='Min 8 chars, uppercase, lowercase, number'
      />
      <AuthInput
        id='confirmPassword'
        label='Confirm Password'
        type='password'
        icon={Lock}
        placeholder='Confirm your password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errors.confirmPassword}
      />

      <button
        type='submit'
        disabled={isLoading}
        className='w-full py-2.5 px-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-[10px] hover:bg-neutral-800 dark:hover:bg-neutral-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer'
      >
        {isLoading ? (
          <div className='w-4 h-4 border-2 border-neutral-400 border-t-white dark:border-neutral-500 dark:border-t-neutral-900 rounded-full animate-spin mx-auto' />
        ) : (
          "Create Account"
        )}
      </button>

      <p className='text-center text-neutral-500 dark:text-neutral-400 text-xs'>
        Already have an account?{" "}
        <Link
          to='/login'
          className='text-neutral-900 dark:text-white font-medium hover:underline'
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};
