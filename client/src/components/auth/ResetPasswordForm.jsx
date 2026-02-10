import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import {
  validatePassword,
  validatePasswordMatch,
} from "../../utils/validators";
import { resetPassword } from "../../services/authService";
import toast from "react-hot-toast";
import { Lock, ArrowLeft } from "lucide-react";

export const ResetPasswordForm = ({ token }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.message;
    }

    const matchValidation = validatePasswordMatch(password, confirmPassword);
    if (!matchValidation.isValid) {
      newErrors.confirmPassword = matchValidation.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await resetPassword(token, password);
      toast.success("Password reset successful! You are now logged in.");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      <p className='text-gray-400 text-sm text-center'>
        Enter your new password below.
      </p>

      <Input
        label='New Password'
        name='password'
        type='password'
        placeholder='Enter new password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        leftIcon={<Lock size={18} />}
      />

      <Input
        label='Confirm Password'
        name='confirmPassword'
        type='password'
        placeholder='Confirm new password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errors.confirmPassword}
        leftIcon={<Lock size={18} />}
      />

      <Button type='submit' fullWidth isLoading={isLoading}>
        Reset Password
      </Button>

      <p className='text-center text-gray-400 text-sm'>
        <Link
          to='/login'
          className='inline-flex items-center gap-1 text-green-500 hover:text-green-400 font-medium'
        >
          <ArrowLeft size={14} />
          Back to Sign In
        </Link>
      </p>
    </form>
  );
};
