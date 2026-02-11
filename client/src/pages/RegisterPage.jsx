import { AuthCard } from "../components/auth/AuthCard.jsx";
import { RegisterForm } from "../components/auth/RegisterForm.jsx";
import { SocialAuth } from "../components/auth/SocialAuth.jsx";

export const RegisterPage = () => {
  return (
    <AuthCard title='Create Account' subtitle='Start designing amazing logos'>
      <RegisterForm />
      <SocialAuth />
    </AuthCard>
  );
};
