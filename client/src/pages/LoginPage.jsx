import { AuthCard } from "../components/auth/AuthCard.jsx";
import { LoginForm } from "../components/auth/LoginForm.jsx";
import { SocialAuth } from "../components/auth/SocialAuth.jsx";
import { AnimatedBackground } from "../components/ui/AnimatedBackground.jsx";

export const LoginPage = () => {
  return (
    <div className='relative min-h-screen'>
      <AnimatedBackground variant='mesh' opacity={0.2} />
      <AuthCard title='Welcome Back' subtitle='Sign in to your account'>
        <LoginForm />
        <SocialAuth />
      </AuthCard>
    </div>
  );
};
