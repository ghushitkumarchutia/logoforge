import { useParams, Navigate } from "react-router-dom";
import { AuthCard } from "../components/auth/AuthCard.jsx";
import { ResetPasswordForm } from "../components/auth/ResetPasswordForm.jsx";
import { AnimatedBackground } from "../components/ui/AnimatedBackground.jsx";

export const ResetPasswordPage = () => {
  const { token } = useParams();

  if (!token) {
    return <Navigate to='/forgot-password' replace />;
  }

  return (
    <div className='relative min-h-screen'>
      <AnimatedBackground variant='mesh' opacity={0.2} />
      <AuthCard title='Reset Password' subtitle='Enter your new password'>
        <ResetPasswordForm token={token} />
      </AuthCard>
    </div>
  );
};
