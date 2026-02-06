import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Loader } from "../common/Loader";

export const AuthRedirect = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
        <Loader size='lg' />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }

  return children;
};
