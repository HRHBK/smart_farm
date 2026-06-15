'use client';
import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { FinancialSummary } from '../../components/finance/financial-summary';
import { TransactionList } from '../../components/finance/transaction-list';
import AddTransactionDialog from '../../components/finance/add-transaction-dialog';
import { transactions as mockTransactions } from '../../lib/mock-data';
import { motion } from 'framer-motion';

export default function FinancePage() {
  const [txs, setTxs] = useState(mockTransactions);
  const [open, setOpen] = useState(false);

  function handleDelete(id: string) {
    setTxs((s) => s.filter((t) => t.id !== id));
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <header className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Financial Management</h1>
            <p className="text-sm text-muted-foreground">Overview of income, expenses and cash flow.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setOpen(true)} className="rounded-md bg-violet-600 px-3 py-2 text-white text-sm">New</button>
          </div>
        </header>

        <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4">
          <FinancialSummary transactions={txs as any} />
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="">
          <TransactionList transactions={txs as any} categories={[]} onDeleteTransaction={handleDelete} />
        </motion.section>

        <AddTransactionDialog open={open} onClose={() => setOpen(false)} onCreated={(t: any) => { setTxs((s) => [t, ...s]); setOpen(false); }} />
      </div>
    </DashboardLayout>
  );
}
