'use client';
import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { tasks as mockTasks } from '../../lib/mock-data';
import { motion } from 'framer-motion';

function TaskRow({ t }: { t: any }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
      <div>
        <div className="text-sm font-medium">{t.title}</div>
        <div className="text-xs text-slate-500">{t.assignee} • due {t.dueDate}</div>
      </div>
      <div className={`text-xs px-2 py-1 rounded-full ${t.status === 'done' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
        {t.status}
      </div>
    </div>
  );
}

export default function TasksPage() {
  const [list, setList] = useState(mockTasks);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  function create() {
    if (!title) return;
    const n = { id: String(Date.now()), title, assignee: 'Unassigned', dueDate: null, status: 'pending' };
    setList((s) => [n, ...s]);
    setTitle('');
    setOpen(false);
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <header className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Tasks</h1>
            <p className="text-sm text-muted-foreground">Assign and track worker tasks — responsive across sizes.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setOpen((v) => !v)} className="rounded-md bg-violet-600 px-3 py-2 text-white text-sm">New</button>
          </div>
        </header>

        {open && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex gap-2">
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" className="flex-1 p-2 border rounded-md" />
              <button onClick={create} className="bg-green-600 text-white px-3 py-2 rounded-md">Add</button>
            </div>
          </motion.div>
        )}

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-3">
          {list.map((t) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
              <TaskRow t={t} />
            </motion.div>
          ))}
        </motion.section>
      </div>
    </DashboardLayout>
  );
}
