'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const actions = [
  { href: '/finance', label: 'Add Transaction' },
  { href: '/tasks', label: 'New Task' },
  { href: '/inventory', label: 'Inventory' },
  { href: '/farm', label: 'View Farm' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const card = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

export default function QuickActionsGrid() {
  return (
    <motion.div initial="hidden" animate="show" variants={container} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {actions.map((a) => (
        <motion.div key={a.href} variants={card} whileHover={{ scale: 1.03 }}>
          <Link href={a.href} className="block bg-white p-3 rounded-lg shadow-sm text-center">
            <div className="text-sm font-medium">{a.label}</div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
