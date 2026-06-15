'use client';
import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { tasks as mockTasks } from '../../lib/mock-data';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Calendar, User, CheckCircle2, Circle, Clock } from 'lucide-react';

function TaskCard({ t, onToggle }: { t: any, onToggle: (id: string) => void }) {
  const isDone = t.status === 'done';
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`p-5 rounded-2xl border backdrop-blur-md shadow-sm transition-all ${
        isDone 
          ? 'bg-slate-50/50 border-slate-200/50 dark:bg-zinc-900/40 dark:border-zinc-800/50 opacity-70 grayscale-[30%]' 
          : 'bg-white/80 border-emerald-100/50 dark:bg-zinc-900/80 dark:border-emerald-900/30 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.1)]'
      }`}
    >
      <div className="flex items-start gap-4">
        <button 
          onClick={() => onToggle(t.id)}
          className={`mt-1 transition-colors ${isDone ? 'text-emerald-500' : 'text-slate-300 hover:text-emerald-400 dark:text-zinc-600'}`}
        >
          {isDone ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
        </button>
        <div className="flex-1">
          <h3 className={`font-bold text-lg mb-2 ${isDone ? 'line-through text-slate-500 dark:text-zinc-500' : 'text-slate-800 dark:text-slate-100'}`}>
            {t.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-zinc-400">
              <User className="w-4 h-4" />
              {t.assignee}
            </div>
            {t.dueDate && (
              <div className={`flex items-center gap-1.5 ${isDone ? 'text-slate-500' : 'text-amber-600 dark:text-amber-400'}`}>
                <Calendar className="w-4 h-4" />
                {new Date(t.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
              </div>
            )}
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          isDone ? 'bg-slate-200 text-slate-500 dark:bg-zinc-800 dark:text-zinc-400' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
        }`}>
          {t.status}
        </div>
      </div>
    </motion.div>
  );
}

export default function TasksPage() {
  const [list, setList] = useState(mockTasks as any[]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('');

  function create(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    const n = { 
      id: String(Date.now()), 
      title, 
      assignee: assignee || 'Unassigned', 
      dueDate: new Date(Date.now() + 86400000).toISOString(), 
      status: 'pending' 
    };
    setList((s) => [n, ...s]);
    setTitle('');
    setAssignee('');
    setOpen(false);
  }

  function toggleStatus(id: string) {
    setList(s => s.map(t => 
      t.id === id ? { ...t, status: t.status === 'done' ? 'pending' : 'done' } : t
    ));
  }

  const pendingTasks = list.filter(t => t.status !== 'done');
  const completedTasks = list.filter(t => t.status === 'done');

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-5xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Task Management</h1>
            <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 mt-1">Assign, track, and complete farm operations.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setOpen((v) => !v)} 
              className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 text-white text-sm font-bold shadow-md shadow-emerald-500/20 transition-all"
            >
              <Plus className="w-4 h-4" />
              {open ? 'Cancel' : 'New Task'}
            </button>
          </div>
        </header>

        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -20 }} 
              animate={{ opacity: 1, height: 'auto', y: 0 }} 
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="overflow-hidden"
            >
              <form onSubmit={create} className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Create New Task</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <input 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Task description (e.g. Irrigate South Field)" 
                    className="flex-[2] p-3 border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" 
                    autoFocus
                  />
                  <input 
                    value={assignee} 
                    onChange={(e) => setAssignee(e.target.value)} 
                    placeholder="Assignee Name" 
                    className="flex-1 p-3 border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" 
                  />
                  <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                    Save Task
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">Pending ({pendingTasks.length})</h2>
            </div>
            <motion.div layout className="space-y-4">
              <AnimatePresence>
                {pendingTasks.map((t) => (
                  <TaskCard key={t.id} t={t} onToggle={toggleStatus} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-slate-400 dark:text-zinc-500" />
              <h2 className="text-xl font-bold text-slate-600 dark:text-slate-400">Completed ({completedTasks.length})</h2>
            </div>
            <motion.div layout className="space-y-4">
              <AnimatePresence>
                {completedTasks.map((t) => (
                  <TaskCard key={t.id} t={t} onToggle={toggleStatus} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
