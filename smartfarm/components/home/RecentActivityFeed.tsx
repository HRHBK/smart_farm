'use client';
import React from 'react';
import { transactions, tasks } from '../../lib/mock-data';
import { motion } from 'framer-motion';

const list = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.04 } } };
const row = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

export default function RecentActivityFeed() {
  return (
    <motion.div initial="hidden" animate="show" variants={list} className="bg-white p-3 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium mb-2">Recent Activity</h3>

      <div className="space-y-3 md:flex md:gap-4 md:space-y-0">
        <motion.div variants={row} className="flex-1">
          <div className="text-xs text-slate-500">Transactions</div>
          <ul className="mt-2 space-y-1">
            {transactions.slice(0,5).map((t) => (
              <li key={t.id} className="flex justify-between items-center">
                <div className="text-sm">{t.description}</div>
                <div className={`text-xs ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>{t.type === 'income' ? `+FCFA ${t.amount}` : `-FCFA ${t.amount}`}</div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={row} className="flex-1">
          <div className="text-xs text-slate-500">Tasks</div>
          <ul className="mt-2 space-y-1">
            {tasks.slice(0,5).map((g) => (
              <li key={g.id} className="flex justify-between items-center">
                <div className="text-sm">{g.title}</div>
                <div className="text-xs text-slate-500">{g.assignee}</div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
