import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
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
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message;
    }
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
      <div className='text-center space-y-4'>
        <div className='w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto'>
          <CheckCircle size={32} className='text-green-500' />
        </div>
        <h3 className='text-lg font-semibold text-white'>Check Your Email</h3>
        <p className='text-gray-400 text-sm'>
          If an account with <span className='text-green-400'>{email}</span>{" "}
          exists, we've sent a password reset link.
        </p>
        <p className='text-gray-500 text-xs'>
          The link will expire in 30 minutes.
        </p>
        <Link
          to='/login'
          className='inline-flex items-center gap-2 text-green-500 hover:text-green-400 text-sm font-medium'
        >
          <ArrowLeft size={16} />
          Back to Sign In
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      <p className='text-gray-400 text-sm text-center'>
        Enter your email address and we'll send you a link to reset your
        password.
      </p>

      <Input
        label='Email'
        name='email'
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        leftIcon={<Mail size={18} />}
      />

      <Button type='submit' fullWidth isLoading={isLoading}>
        Send Reset Link
      </Button>

      <p className='text-center text-gray-400 text-sm'>
        Remember your password?{" "}
        <Link
          to='/login'
          className='text-green-500 hover:text-green-400 font-medium'
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};
