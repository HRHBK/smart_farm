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
      <header className="mb-4">
        <HeroSection />
      </header>

      <main className="space-y-4">
        <section>
          <StatsContainer data={statData} />
        </section>

        <section>
          <QuickActionsGrid />
        </section>

        <section>
          <h2 className="text-lg font-medium mb-2">Recent cash flow</h2>
          <MiniFinanceChart data={miniTrend} />
        </section>

        <section>
          <h2 className="text-lg font-medium mb-2">Recent activity</h2>
          <RecentActivityFeed />
        </section>
      </main>
    </DashboardLayout>
  );
}
