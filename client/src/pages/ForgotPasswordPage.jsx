import { AuthCard } from "../components/auth/AuthCard.jsx";
import { ForgotPasswordForm } from "../components/auth/ForgotPasswordForm.jsx";
import { AnimatedBackground } from "../components/ui/AnimatedBackground.jsx";

export const ForgotPasswordPage = () => {
  return (
    <div className='relative min-h-screen'>
      <AnimatedBackground variant='mesh' opacity={0.2} />
      <AuthCard
        title='Forgot Password'
        subtitle='We will send you a reset link'
      >
        <ForgotPasswordForm />
      </AuthCard>
    </div>
  );
};
