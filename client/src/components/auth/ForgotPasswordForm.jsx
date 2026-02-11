import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/validators";
import { forgotPassword } from "../../services/authService";
import toast from "react-hot-toast";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const v = validateEmail(email);
    if (!v.isValid) newErrors.email = v.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await forgotPassword(email);
      setIsSent(true);
      toast.success("Reset link sent! Check your email.");
    } catch (error) {
      toast.error(error.message || "Failed to send reset link");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSent) {
    return (
      <div className='text-center space-y-4 py-2'>
        <div className='w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto'>
          <CheckCircle size={24} className='text-neutral-900 dark:text-white' />
        </div>
        <div>
          <h3 className='text-base font-semibold text-neutral-900 dark:text-white mb-1'>
            Check your email
          </h3>
          <p className='text-neutral-500 dark:text-neutral-400 text-[13px]'>
            If an account with{" "}
            <span className='text-neutral-900 dark:text-white font-medium'>
              {email}
            </span>{" "}
            exists, we&apos;ve sent a password reset link.
          </p>
        </div>
        <p className='text-neutral-400 text-[11px]'>
          The link expires in 30 minutes.
        </p>
        <Link
          to='/login'
          className='inline-flex items-center gap-1.5 text-neutral-900 dark:text-white hover:underline text-sm font-medium'
        >
          <ArrowLeft size={14} />
          Back to Sign In
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <p className='text-neutral-500 dark:text-neutral-400 text-[13px] text-center'>
        Enter your email and we&apos;ll send you a reset link.
      </p>

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
            className='w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent transition-colors'
          />
        </div>
        {errors.email && (
          <p className='mt-1 text-xs text-red-500'>{errors.email}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={isLoading}
        className='w-full py-2.5 px-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-[10px] hover:bg-neutral-800 dark:hover:bg-neutral-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer'
      >
        {isLoading ? (
          <div className='w-4 h-4 border-2 border-neutral-400 border-t-white dark:border-neutral-500 dark:border-t-neutral-900 rounded-full animate-spin mx-auto' />
        ) : (
          "Send Reset Link"
        )}
      </button>

      <p className='text-center text-neutral-500 dark:text-neutral-400 text-xs'>
        Remember your password?{" "}
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
