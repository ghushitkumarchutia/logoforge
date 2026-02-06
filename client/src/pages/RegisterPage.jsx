import { AuthCard } from "../components/auth/AuthCard.jsx";
import { RegisterForm } from "../components/auth/RegisterForm.jsx";
import { SocialAuth } from "../components/auth/SocialAuth.jsx";
import { AnimatedBackground } from "../components/ui/AnimatedBackground.jsx";

export const RegisterPage = () => {
  return (
    <div className='relative min-h-screen'>
      <AnimatedBackground variant='mesh' opacity={0.2} />
      <AuthCard title='Create Account' subtitle='Start designing amazing logos'>
        <RegisterForm />
        <SocialAuth />
      </AuthCard>
    </div>
  );
};
