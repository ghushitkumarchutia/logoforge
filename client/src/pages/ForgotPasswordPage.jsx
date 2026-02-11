import { AuthCard } from "../components/auth/AuthCard.jsx";
import { ForgotPasswordForm } from "../components/auth/ForgotPasswordForm.jsx";

export const ForgotPasswordPage = () => {
  return (
    <AuthCard title='Forgot Password' subtitle='We will send you a reset link'>
      <ForgotPasswordForm />
    </AuthCard>
  );
};
