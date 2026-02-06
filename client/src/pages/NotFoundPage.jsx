import { Link } from "react-router-dom";
import { Button } from "../components/common/Button.jsx";
import { Home } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent'>
          404
        </h1>

        <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mt-4 mb-2'>
          Page Not Found
        </h2>

        <p className='text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8'>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to='/'>
          <Button leftIcon={<Home size={18} />}>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};
