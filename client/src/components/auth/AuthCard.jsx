import { Link } from "react-router-dom";
import { GlassCard } from "../ui/GlassCard";
import { APP_NAME } from "../../utils/constants";

export const AuthCard = ({ children, title, subtitle }) => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <GlassCard className='w-full max-w-md p-8' blur='lg' opacity={10}>
        <div className='text-center mb-8'>
          <Link to='/' className='inline-block'>
            <div className='flex items-center justify-center gap-2 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>L</span>
              </div>
              <span className='text-2xl font-bold text-white'>{APP_NAME}</span>
            </div>
          </Link>
          {title && (
            <h1 className='text-2xl font-bold text-white mb-2'>{title}</h1>
          )}
          {subtitle && <p className='text-gray-400'>{subtitle}</p>}
        </div>
        {children}
      </GlassCard>
    </div>
  );
};
