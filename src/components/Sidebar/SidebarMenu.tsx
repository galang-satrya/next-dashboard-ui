'use client';

import { useState } from 'react';
import { ChevronDown, LayoutDashboard, Users, Settings, FileText, LucideIcon } from 'lucide-react';

type SubMenuItem = {
  label: string;
  href: string;
};

type MenuItem = {
  label: string;
  icon: LucideIcon;
  href?: string;
  submenu?: SubMenuItem[];
};

type MenuEntry = MenuItem | { group: string };

const menuItems: MenuEntry[] = [
  { group: 'Main Application' },
  { label: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { label: 'Portal Link', icon: LayoutDashboard, href: '#' },
  {
    label: 'Report',
    icon: FileText,
    submenu: [
      { label: 'Admistration', href: '#' },
      { label: 'studentship', href: '#' },
      { label: 'Finance', href: '#' },
    ],
  },

  { group: 'School Management' },
  { label: 'School', icon: LayoutDashboard, href: '#' },
  { label: 'infrastructure', icon: LayoutDashboard, href: '#' },
  {
    label: 'GTK',
    icon: Users,
    submenu: [
      { label: 'Teacher', href: '#' },
      { label: 'Staff', href: '#' },
    ],
  },
  {
    label: 'Students',
    icon: Users,
    submenu: [
      { label: 'Active', href: '#' },
      { label: 'Deactive', href: '#' },
    ],
  },
  { group: 'Academics' },
  { label: 'Classes', icon: LayoutDashboard, href: '#' },
  {
    label: 'Lesson',
    icon: Users,
    submenu: [
      { label: 'Exams', href: '#' },
      { label: 'Attendance', href: '#' },
      { label: 'Assignment', href: '#' },
      { label: 'Grade', href: '#' },
      { label: 'Achivement', href: '#' },
    ],
  },
  { label: 'Evennts', icon: LayoutDashboard, href: '#' },
  { label: 'Message', icon: LayoutDashboard, href: '#' },

  { group: 'Other and Account' },
  { label: 'Profile', icon: LayoutDashboard, href: '#' },
  { label: 'Settings', icon: Settings, href: '#' },
  { label: 'Logout', icon: LayoutDashboard, href: '#' },
];

const SidebarMenu = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <aside className="w-29 h-screen bg-[#2F3646] border-gray-200 flex flex-col">
      <nav className="flex-1 overflow-y-auto py-[3px] space-y-1">
        {menuItems.map((item, index) => {
          if ('group' in item) {
            return (
              <div
                key={`group-${index}`}
                className="px-3 py-[3px] text-xs font-medium text-[#6b7280] first:pt-2"
              >
                {item.group}
              </div>
            );
          }

          const Icon = item.icon;
          const hasSubmenu = !!item.submenu;
          const isOpen = openMenu === item.label;

          return (
            <div key={item.label}>
              {hasSubmenu ? (
                <button
                  onClick={() => toggleMenu(item.label)}
                  className="w-full flex items-center justify-between px-3 py-[3px] rounded-lg text-sm text-[#9AA1A7] hover:bg-[#262c39] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} />
                    {item.label}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="w-full flex items-center gap-3 px-3 py-[3px] rounded-lg text-sm text-[#9AA1A7] hover:bg-[#262c39] transition-colors"
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              )}

              {hasSubmenu && (
                <div
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40 mt-1' : 'max-h-0'
                    }`}
                >
                  <div className="ml-9 space-y-1 border-l border-white/10 pl-3">
                    {item.submenu!.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block py-[3px] rounded-md text-sm text-[#9AA1A7] hover:text-white hover:bg-[#262c39] transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default SidebarMenu;
