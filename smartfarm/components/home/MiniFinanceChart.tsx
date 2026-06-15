'use client';
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

export default function MiniFinanceChart({ data }: { data: { date: string; amount: number }[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-3 rounded-lg shadow-sm h-36">
      {data.length === 0 ? (
        <div className="text-sm text-slate-400">No data</div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Tooltip formatter={(v: any) => `FCFA ${v}`} />
            <Area type="monotone" dataKey="amount" stroke="#7c3aed" fill="url(#g1)" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </motion.div>
  );
}
