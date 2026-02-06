import { Button } from "../common/Button";
import { Chrome, Github } from "lucide-react";
import toast from "react-hot-toast";

export const SocialAuth = () => {
  const handleSocialAuth = (provider) => {
    toast.info(`${provider} login coming soon!`);
  };

  return (
    <div className='mt-6'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-600' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-transparent text-gray-400'>
            or continue with
          </span>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-2 gap-3'>
        <Button
          variant='outline'
          onClick={() => handleSocialAuth("Google")}
          leftIcon={<Chrome size={18} />}
        >
          Google
        </Button>
        <Button
          variant='outline'
          onClick={() => handleSocialAuth("GitHub")}
          leftIcon={<Github size={18} />}
        >
          GitHub
        </Button>
      </div>
    </div>
  );
};
