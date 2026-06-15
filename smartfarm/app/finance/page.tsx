'use client';
import React, { useState, useMemo } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { FinancialSummary } from '../../components/finance/financial-summary';
import { TransactionList } from '../../components/finance/transaction-list';
import { AddTransactionDialog } from '../../components/finance/add-transaction-dialog';
import { FinanceChart } from '../../components/finance/finance-chart';
import { transactions as mockTransactions } from '../../lib/mock-data';
import { motion } from 'framer-motion';

export default function FinancePage() {
  const [txs, setTxs] = useState(mockTransactions as any[]);

  function handleDelete(id: string) {
    setTxs((s) => s.filter((t) => t.id !== id));
  }

  function handleMarkPaid(id: string) {
    setTxs((s) => s.map((t) => t.id === id ? { ...t, status: 'paid' } : t));
  }

  // Generate chart data by grouping transactions by date
  const chartData = useMemo(() => {
    const grouped = txs.reduce((acc, t) => {
      if (t.status !== 'paid') return acc;
      const date = new Date(t.date).toISOString().split('T')[0];
      if (!acc[date]) acc[date] = { date, income: 0, expense: 0 };
      if (t.type === 'income') acc[date].income += Number(t.amount);
      if (t.type === 'expense') acc[date].expense += Number(t.amount);
      return acc;
    }, {} as Record<string, { date: string; income: number; expense: number }>);
    
    return Object.values(grouped).sort((a, b) => a.date.localeCompare(b.date));
  }, [txs]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Financial Management</h1>
            <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 mt-1">Overview of income, expenses and cash flow.</p>
          </div>
          <div className="flex items-center gap-3">
            <AddTransactionDialog categories={[]} onAddTransaction={async (t: any) => { setTxs((s) => [{...t, id: Math.random().toString()}, ...s]); }} />
          </div>
        </header>

        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid gap-4">
          <FinancialSummary transactions={txs} />
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          <FinanceChart data={chartData} />
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
          <TransactionList 
            transactions={txs} 
            categories={[]} 
            onDeleteTransaction={handleDelete}
            onMarkPaid={handleMarkPaid} 
          />
        </motion.section>
      </div>
    </DashboardLayout>
  );
}
