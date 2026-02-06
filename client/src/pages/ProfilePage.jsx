import { useAuth } from "../hooks/useAuth.js";
import { Navbar } from "../components/layout/Navbar.jsx";
import { PageContainer } from "../components/layout/PageContainer.jsx";
import { Card } from "../components/common/Card.jsx";
import { formatDate } from "../utils/formatters.js";
import { User, Mail, Calendar } from "lucide-react";

export const ProfilePage = () => {
  const { user } = useAuth();

  const profileFields = [
    {
      icon: User,
      label: "Username",
      value: user?.username || "N/A",
    },
    {
      icon: Mail,
      label: "Email",
      value: user?.email || "N/A",
    },
    {
      icon: Calendar,
      label: "Member Since",
      value: user?.createdAt ? formatDate(user.createdAt) : "N/A",
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <Navbar />

      <main className='pt-20 pb-12'>
        <PageContainer maxWidth='lg'>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
              My Profile
            </h1>
            <p className='text-gray-600 dark:text-gray-400'>
              View your account information
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            <Card padding='lg'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center'>
                  <span className='text-white font-bold text-2xl'>
                    {user?.username?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                </div>
                <div>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
                    {user?.username || "User"}
                  </h2>
                  <p className='text-gray-500 dark:text-gray-400'>
                    {user?.email || "No email"}
                  </p>
                </div>
              </div>

              <div className='space-y-4'>
                {profileFields.map((field) => (
                  <div
                    key={field.label}
                    className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg'
                  >
                    <div className='w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center'>
                      <field.icon
                        size={20}
                        className='text-green-600 dark:text-green-400'
                      />
                    </div>
                    <div>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        {field.label}
                      </p>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        {field.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card padding='lg'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Account Settings
              </h3>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>
                Password change and additional account settings will be
                available in a future update.
              </p>
            </Card>
          </div>
        </PageContainer>
      </main>
    </div>
  );
};
