import { useParams, Navigate } from "react-router-dom";
import { AuthCard } from "../components/auth/AuthCard.jsx";
import { ResetPasswordForm } from "../components/auth/ResetPasswordForm.jsx";

export const ResetPasswordPage = () => {
  const { token } = useParams();

  if (!token) {
    return <Navigate to='/forgot-password' replace />;
  }

  return (
    <AuthCard title='Reset Password' subtitle='Enter your new password'>
      <ResetPasswordForm token={token} />
    </AuthCard>
  );
};
