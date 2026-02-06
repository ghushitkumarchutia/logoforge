import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { validateEmail, validateRequired } from "../../utils/validators";
import toast from "react-hot-toast";
import { Mail, Lock } from "lucide-react";

export const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message;
    }

    const passwordValidation = validateRequired(password, "Password");
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.message;
    }

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
    <form onSubmit={handleSubmit} className='space-y-5'>
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

      <Input
        label='Password'
        name='password'
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        leftIcon={<Lock size={18} />}
      />

      <div className='flex items-center justify-end'>
        <Link
          to='/forgot-password'
          className='text-sm text-green-500 hover:text-green-400'
        >
          Forgot password?
        </Link>
      </div>

      <Button type='submit' fullWidth isLoading={isLoading}>
        Sign In
      </Button>

      <p className='text-center text-gray-400 text-sm'>
        Don't have an account?{" "}
        <Link
          to='/register'
          className='text-green-500 hover:text-green-400 font-medium'
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};
