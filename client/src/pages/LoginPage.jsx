import { AuthCard } from "../components/auth/AuthCard.jsx";
import { LoginForm } from "../components/auth/LoginForm.jsx";
import { SocialAuth } from "../components/auth/SocialAuth.jsx";

export const LoginPage = () => {
  return (
    <AuthCard title='Welcome Back' subtitle='Sign in to your account'>
      <LoginForm />
      <SocialAuth />
    </AuthCard>
  );
};
