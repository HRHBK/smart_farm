'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/farm', label: 'Farm' },
  { href: '/inventory', label: 'Inventory' },
  { href: '/finance', label: 'Finance' },
  { href: '/tasks', label: 'Tasks' },
];

export default function MobileBottomNav() {
  const path = usePathname() || '/';
  return (
    <nav aria-label="Bottom navigation" className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t dark:bg-slate-800 md:hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {tabs.map((t) => {
            const active = path === t.href || path?.startsWith(t.href + '/');
            return (
              <Link key={t.href} href={t.href} className={`flex-1 text-center ${active ? 'text-violet-600' : 'text-slate-600'}`}>
                <div className="text-xs py-3">{t.label}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
