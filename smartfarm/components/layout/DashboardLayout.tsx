'use client';
import React from 'react';
import MobileBottomNav from '../layout/MobileBottomNav';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

const sidebarLinks = [
  { href: '/', label: 'Home' },
  { href: '/farm', label: 'Farm' },
  { href: '/inventory', label: 'Inventory' },
  { href: '/finance', label: 'Finance' },
  { href: '/tasks', label: 'Tasks' },
];

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-[90vh] bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100">
      <div className="w-[min(100%,90vw)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 pb-28">
          <aside className="hidden md:block md:col-span-1">
            <motion.nav initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="sticky top-6">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                <div className="text-sm font-semibold mb-3">Navigation</div>
                <ul className="space-y-2">
                  {sidebarLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="block rounded px-2 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </aside>

          <main className="md:col-span-3">
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              {children}
            </motion.div>
          </main>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
