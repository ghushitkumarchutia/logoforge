import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  validatePassword,
  validatePasswordMatch,
} from "../../utils/validators";
import { resetPassword } from "../../services/authService";
import toast from "react-hot-toast";
import { Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";

export const ResetPasswordForm = ({ token }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const pv = validatePassword(password);
    if (!pv.isValid) newErrors.password = pv.message;
    const mv = validatePasswordMatch(password, confirmPassword);
    if (!mv.isValid) newErrors.confirmPassword = mv.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await resetPassword(token, password);
      toast.success("Password reset successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <p className='text-neutral-500 dark:text-neutral-400 text-[13px] text-center'>
        Enter your new password below.
      </p>

      <div>
        <label
          htmlFor='password'
          className='block text-[13px] font-medium text-neutral-700 dark:text-neutral-300 mb-1.5'
        >
          New Password
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400'>
            <Lock size={16} />
          </div>
          <input
            id='password'
            name='password'
            type={showPassword ? "text" : "password"}
            placeholder='Enter new password'
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

      <div>
        <label
          htmlFor='confirmPassword'
          className='block text-[13px] font-medium text-neutral-700 dark:text-neutral-300 mb-1.5'
        >
          Confirm Password
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400'>
            <Lock size={16} />
          </div>
          <input
            id='confirmPassword'
            name='confirmPassword'
            type={showPassword ? "text" : "password"}
            placeholder='Confirm new password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='w-full pl-10 pr-10 py-2.5 rounded-[10px] border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent transition-colors'
          />
        </div>
        {errors.confirmPassword && (
          <p className='mt-1 text-xs text-red-500'>{errors.confirmPassword}</p>
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
          "Reset Password"
        )}
      </button>

      <p className='text-center'>
        <Link
          to='/login'
          className='inline-flex items-center gap-1 text-neutral-900 dark:text-white hover:underline text-sm font-medium'
        >
          <ArrowLeft size={14} />
          Back to Sign In
        </Link>
      </p>
    </form>
  );
};
