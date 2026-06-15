'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../../lib/mock-data';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <motion.div initial="hidden" animate="show" variants={container} className="bg-gradient-to-r from-violet-600 to-emerald-400 p-4 sm:p-6 rounded-lg text-white">
        <div className="relative">
          <motion.div variants={item} className="flex items-start justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">SmartFarm</h1>
              <p className="text-xs sm:text-sm opacity-90">Manage crops, livestock, finance and tasks — responsive & animated</p>
            </div>
            <div className="text-right text-xs opacity-90">Welcome back</div>
          </motion.div>

          <motion.div variants={item} className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
            {stats.map((s) => (
              <motion.div key={s.id} variants={item} whileHover={{ scale: 1.03 }} className="bg-white/20 rounded-md p-2 text-center">
                <div className="text-xs opacity-90">{s.label}</div>
                <div className="text-lg font-semibold mt-1">{s.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
