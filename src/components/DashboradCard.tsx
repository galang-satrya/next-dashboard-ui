import { Users, GraduationCap, BookOpen, ClipboardList, TrendingUp, TrendingDown } from 'lucide-react';

type StatCard = {
  label: string;
  value: string;
  change?: { value: string; direction: 'up' | 'down' };
  icon: React.ElementType;
};

const stats: StatCard[] = [
  {
    label: 'Total Students',
    value: '2,481',
    change: { value: '4.2%', direction: 'up' },
    icon: GraduationCap,
  },
  {
    label: 'Total Teachers',
    value: '164',
    change: { value: '1.1%', direction: 'up' },
    icon: Users,
  },
  {
    label: 'Active Classes',
    value: '58',
    icon: BookOpen,
  },
  {
    label: 'Pending Reports',
    value: '7',
    change: { value: '2', direction: 'down' },
    icon: ClipboardList,
  },
  {
    label: 'Total Rombel',
    value: '7',
    change: { value: '2', direction: 'down' },
    icon: ClipboardList,
  },
];

const DashboardCards = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 p-2 sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const isHero = index === 0;

        return (
          <div
            key={stat.label}
            className={`rounded-2xl border border-gray-100 bg-white p-5 shadow-sm ${isHero ? 'lg:col-span-1' : ''
              }`}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-[#2F3646]/5 p-2.5">
                <Icon size={isHero ? 24 : 20} className="text-[#2F3646]" />
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <div className="mt-1 flex items-center gap-3">
                  <p
                    className={`font-semibold text-[#2F3646] ${isHero ? 'text-3xl' : 'text-2xl'
                      }`}
                  >
                    {stat.value}
                  </p>

                  {stat.change && (
                    <div className="flex items-center gap-1 text-xs">
                      {stat.change.direction === 'up' ? (
                        <TrendingUp size={14} className="text-emerald-500" />
                      ) : (
                        <TrendingDown size={14} className="text-rose-500" />
                      )}
                      <span
                        className={
                          stat.change.direction === 'up'
                            ? 'text-emerald-600'
                            : 'text-rose-600'
                        }
                      >
                        {stat.change.value}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;