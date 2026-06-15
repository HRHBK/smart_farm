'use client';
import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <motion.div variants={card} whileHover={{ translateY: -6 }} className="bg-white p-3 rounded-lg shadow-sm">
      <div className="text-xs text-slate-500">{title}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </motion.div>
  );
}

export default function StatsContainer({ data }: { data: { income: string; expense: string; net: string; tasks: string } }) {
  return (
    <motion.div initial="hidden" animate="show" variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <StatCard title="Total Income" value={data.income} />
      <StatCard title="Total Expense" value={data.expense} />
      <StatCard title="Net" value={data.net} />
      <StatCard title="Pending Tasks" value={data.tasks} />
    </motion.div>
  );
}
