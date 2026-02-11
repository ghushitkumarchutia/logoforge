import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { validateEmail, validateRequired } from "../../utils/validators";
import toast from "react-hot-toast";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) newErrors.email = emailValidation.message;
    const passwordValidation = validateRequired(password, "Password");
    if (!passwordValidation.isValid)
      newErrors.password = passwordValidation.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome back!");
    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label
          htmlFor='email'
          className='block text-[13px] font-medium text-neutral-700 dark:text-neutral-300 mb-1.5'
        >
          Email
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400'>
            <Mail size={16} />
          </div>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='you@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full pl-10 pr-4 py-2.5 rounded-[10px] border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent transition-colors'
          />
        </div>
        {errors.email && (
          <p className='mt-1 text-xs text-red-500'>{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor='password'
          className='block text-[13px] font-medium text-neutral-700 dark:text-neutral-300 mb-1.5'
        >
          Password
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400'>
            <Lock size={16} />
          </div>
          <input
            id='password'
            name='password'
            type={showPassword ? "text" : "password"}
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full pl-10 pr-10 py-2.5 rounded-[10px] border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent transition-colors'
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.password && (
          <p className='mt-1 text-xs text-red-500'>{errors.password}</p>
        )}
      </div>

      <div className='flex items-center justify-end'>
        <Link
          to='/forgot-password'
          className='text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors'
        >
          Forgot password?
        </Link>
      </div>

      <button
        type='submit'
        disabled={isLoading}
        className='w-full py-2.5 px-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-[10px] hover:bg-neutral-800 dark:hover:bg-neutral-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer'
      >
        {isLoading ? (
          <div className='w-4 h-4 border-2 border-neutral-400 border-t-white dark:border-neutral-500 dark:border-t-neutral-900 rounded-full animate-spin mx-auto' />
        ) : (
          "Sign In"
        )}
      </button>

      <p className='text-center text-neutral-500 dark:text-neutral-400 text-xs'>
        Don&apos;t have an account?{" "}
        <Link
          to='/register'
          className='text-neutral-900 dark:text-white font-medium hover:underline'
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};
