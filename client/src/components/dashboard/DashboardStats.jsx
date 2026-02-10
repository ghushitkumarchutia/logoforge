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
            className='animate-pulse bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 h-24'
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
      color: "text-green-500",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: Clock,
      label: "Last Active",
      value:
        stats.recentProjects?.length > 0
          ? formatDate(stats.recentProjects[0].updatedAt)
          : "No activity",
      color: "text-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: CalendarDays,
      label: "Member Since",
      value: stats.memberSince ? formatDate(stats.memberSince) : "N/A",
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
      {statCards.map((stat) => (
        <div
          key={stat.label}
          className='bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 flex items-center gap-4'
        >
          <div
            className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
          >
            <stat.icon size={24} className={stat.color} />
          </div>
          <div className='min-w-0'>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              {stat.label}
            </p>
            <p className='text-lg font-semibold text-gray-900 dark:text-white truncate'>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
