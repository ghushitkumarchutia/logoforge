import { useState, useEffect } from "react";
import { getDashboardStats } from "../../services/userService";
import { FolderOpen, Clock, CalendarDays } from "lucide-react";
import { formatDate } from "../../utils/formatters";

export const DashboardStats = () => {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getDashboardStats();
        setStats(response.data);
      } catch {
        setStats(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className='animate-pulse bg-white dark:bg-[#1a1a1a] rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 h-[76px]'
          />
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const statCards = [
    {
      icon: FolderOpen,
      label: "Total Projects",
      value: stats.totalProjects || 0,
    },
    {
      icon: Clock,
      label: "Last Active",
      value:
        stats.recentProjects?.length > 0
          ? formatDate(stats.recentProjects[0].updatedAt)
          : "No activity",
    },
    {
      icon: CalendarDays,
      label: "Member Since",
      value: stats.memberSince ? formatDate(stats.memberSince) : "N/A",
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
      {statCards.map((stat) => (
        <div
          key={stat.label}
          className='bg-white dark:bg-[#1a1a1a] rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 flex items-center gap-4'
        >
          <div className='w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center shrink-0'>
            <stat.icon
              size={20}
              className='text-neutral-500 dark:text-neutral-400'
            />
          </div>
          <div className='min-w-0'>
            <p className='text-xs text-neutral-500 dark:text-neutral-400'>
              {stat.label}
            </p>
            <p className='text-base font-semibold text-neutral-900 dark:text-white truncate'>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
