import React from 'react';
import { useAllOrdersQuery } from '../generated/graphql-hooks';
import TopNav from './navigation/TopNav';
import RecentActivity from './RecentActivity';
import DesktopSidebar from './sidebar/DesktopSidebar';
import WelcomeBanner from './WelcomeBanner';

const Home = () => {
  const { loading, error, data } = useAllOrdersQuery();
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <DesktopSidebar />
      <div className="flex-1 overflow-auto focus:outline-none" tabIndex={0}>
        <TopNav />
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          <WelcomeBanner />
          <RecentActivity orders={[]} />
        </main>
      </div>
    </div>
  );
};
export default Home;
