export const AuthCard = ({ children, title, subtitle }) => {
  return (
    <div className='min-h-screen flex items-center justify-center px-8 md:px-4 py-12 bg-neutral-50 dark:bg-neutral-950'>
      <div className='w-full max-w-[420px]'>
        <div className='text-center mb-4'>
          {title && (
            <h1 className='text-[22px] font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight'>
              {title}
            </h1>
          )}
          {subtitle && (
            <p className='text-neutral-500 dark:text-neutral-400 text-[13px] mt-1.5'>
              {subtitle}
            </p>
          )}
        </div>

        <div className='bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-3xl py-8 px-6 md:py-10 md:px-8 shadow-xs dark:shadow-none'>
          {children}
        </div>
      </div>
    </div>
  );
};
