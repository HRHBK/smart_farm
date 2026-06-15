import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import HeroSection from '../components/home/HeroSection';
import StatsContainer from '../components/home/StatsContainer';
import QuickActionsGrid from '../components/home/QuickActionsGrid';
import MiniFinanceChart from '../components/home/MiniFinanceChart';
import { miniTrend } from '../lib/mock-data';
import RecentActivityFeed from '../components/home/RecentActivityFeed';

export default function Home() {
  const statData = { income: 'FCFA 1,250,000', expense: 'FCFA 720,000', net: 'FCFA 530,000', tasks: '3' };
  return (
    <DashboardLayout>
      <header className="mb-8">
        <HeroSection />
      </header>

      <main className="space-y-8">
        <section>
          <StatsContainer data={statData} />
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Quick Actions</h2>
          </div>
          <QuickActionsGrid />
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Cash Flow Overview</h2>
          </div>
          <MiniFinanceChart data={miniTrend} />
        </section>

        <section>
          <RecentActivityFeed />
        </section>
      </main>
    </DashboardLayout>
  );
}
