import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validatePasswordMatch,
} from "../../utils/validators";
import toast from "react-hot-toast";
import { User, Mail, Lock } from "lucide-react";

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

    const usernameValidation = validateUsername(username);
    if (!usernameValidation.isValid) {
      newErrors.username = usernameValidation.message;
    }

    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message;
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.message;
    }

    const confirmValidation = validatePasswordMatch(password, confirmPassword);
    if (!confirmValidation.isValid) {
      newErrors.confirmPassword = confirmValidation.message;
    }

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
      <Input
        label='Username'
        name='username'
        type='text'
        placeholder='Choose a username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
        leftIcon={<User size={18} />}
      />

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
        placeholder='Create a password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        helperText='Min 8 chars, uppercase, lowercase, number'
        leftIcon={<Lock size={18} />}
      />

      <Input
        label='Confirm Password'
        name='confirmPassword'
        type='password'
        placeholder='Confirm your password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errors.confirmPassword}
        leftIcon={<Lock size={18} />}
      />

      <Button type='submit' fullWidth isLoading={isLoading}>
        Create Account
      </Button>

      <p className='text-center text-gray-400 text-sm'>
        Already have an account?{" "}
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
