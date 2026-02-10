import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import {
  updateProfile,
  changePassword,
  deleteAccount,
} from "../services/userService.js";
import { Navbar } from "../components/layout/Navbar.jsx";
import { PageContainer } from "../components/layout/PageContainer.jsx";
import { Card } from "../components/common/Card.jsx";
import { Input } from "../components/common/Input.jsx";
import { Button } from "../components/common/Button.jsx";
import { ConfirmDialog } from "../components/common/ConfirmDialog.jsx";
import { formatDate } from "../utils/formatters.js";
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateRequired,
} from "../utils/validators.js";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Calendar,
  Lock,
  Trash2,
  Save,
  KeyRound,
  Shield,
} from "lucide-react";

export const ProfilePage = () => {
  const { user, checkAuth } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profileErrors, setProfileErrors] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState({});
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [deletePassword, setDeletePassword] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const errors = {};

    if (username !== user?.username) {
      const v = validateUsername(username);
      if (!v.isValid) errors.username = v.message;
    }
    if (email !== user?.email) {
      const v = validateEmail(email);
      if (!v.isValid) errors.email = v.message;
    }

    if (username === user?.username && email === user?.email) {
      toast("No changes to save", { icon: "ℹ️" });
      return;
    }

    setProfileErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsUpdating(true);
    try {
      await updateProfile({ username, email });
      await checkAuth();
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const errors = {};

    const curV = validateRequired(currentPassword, "Current password");
    if (!curV.isValid) errors.currentPassword = curV.message;

    const newV = validatePassword(newPassword);
    if (!newV.isValid) errors.newPassword = newV.message;

    if (newPassword !== confirmNewPassword) {
      errors.confirmNewPassword = "Passwords do not match";
    }

    setPasswordErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsChangingPassword(true);
    try {
      await changePassword({ currentPassword, newPassword });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      toast.success("Password changed successfully");
    } catch (error) {
      toast.error(error.message || "Failed to change password");
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!deletePassword) {
      toast.error("Password is required");
      return;
    }

    setIsDeleting(true);
    try {
      await deleteAccount(deletePassword);
      toast.success("Account deleted");
      navigate("/");
      window.location.reload();
    } catch (error) {
      toast.error(error.message || "Failed to delete account");
    } finally {
      setIsDeleting(false);
      setShowDeleteDialog(false);
      setDeletePassword("");
    }
  };

  const profileFields = [
    { icon: User, label: "Username", value: user?.username || "N/A" },
    { icon: Mail, label: "Email", value: user?.email || "N/A" },
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
              Manage your account settings
            </p>
          </div>

          <div className='grid gap-6 lg:grid-cols-2'>
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
              <div className='flex items-center gap-2 mb-4'>
                <Save size={20} className='text-green-500' />
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Edit Profile
                </h3>
              </div>
              <form onSubmit={handleUpdateProfile} className='space-y-4'>
                <Input
                  label='Username'
                  name='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={profileErrors.username}
                  leftIcon={<User size={18} />}
                />
                <Input
                  label='Email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={profileErrors.email}
                  leftIcon={<Mail size={18} />}
                />
                <Button
                  type='submit'
                  fullWidth
                  isLoading={isUpdating}
                  leftIcon={<Save size={16} />}
                >
                  Save Changes
                </Button>
              </form>
            </Card>

            <Card padding='lg'>
              <div className='flex items-center gap-2 mb-4'>
                <KeyRound size={20} className='text-purple-500' />
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Change Password
                </h3>
              </div>
              <form onSubmit={handleChangePassword} className='space-y-4'>
                <Input
                  label='Current Password'
                  name='currentPassword'
                  type='password'
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  error={passwordErrors.currentPassword}
                  leftIcon={<Lock size={18} />}
                />
                <Input
                  label='New Password'
                  name='newPassword'
                  type='password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  error={passwordErrors.newPassword}
                  leftIcon={<Lock size={18} />}
                />
                <Input
                  label='Confirm New Password'
                  name='confirmNewPassword'
                  type='password'
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  error={passwordErrors.confirmNewPassword}
                  leftIcon={<Lock size={18} />}
                />
                <Button
                  type='submit'
                  fullWidth
                  isLoading={isChangingPassword}
                  leftIcon={<Shield size={16} />}
                >
                  Update Password
                </Button>
              </form>
            </Card>

            <Card padding='lg'>
              <div className='flex items-center gap-2 mb-4'>
                <Trash2 size={20} className='text-red-500' />
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Danger Zone
                </h3>
              </div>
              <p className='text-gray-500 dark:text-gray-400 text-sm mb-4'>
                Permanently delete your account and all your projects. This
                action cannot be undone.
              </p>
              <Button
                variant='danger'
                fullWidth
                onClick={() => setShowDeleteDialog(true)}
                leftIcon={<Trash2 size={16} />}
              >
                Delete Account
              </Button>
            </Card>
          </div>

          <ConfirmDialog
            isOpen={showDeleteDialog}
            onConfirm={handleDeleteAccount}
            onCancel={() => {
              setShowDeleteDialog(false);
              setDeletePassword("");
            }}
            title='Delete Account'
            message={
              <div className='space-y-3'>
                <p>
                  This will permanently delete your account and all{" "}
                  <strong>projects</strong>. Type your password to confirm.
                </p>
                <Input
                  name='deletePassword'
                  type='password'
                  placeholder='Enter your password'
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  leftIcon={<Lock size={18} />}
                />
              </div>
            }
            confirmText='Delete My Account'
            isLoading={isDeleting}
          />
        </PageContainer>
      </main>
    </div>
  );
};
