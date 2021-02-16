import React from 'react';
import { Order, useFindAllOrdersQuery } from 'types/generated/graphql-hooks';
import TopNav from './navigation/TopNav';
import RecentActivity from './RecentActivity';
import DesktopSidebar from './sidebar/DesktopSidebar';
import WelcomeBanner from './WelcomeBanner';

const Dashboard = () => {
  const { loading, data } = useFindAllOrdersQuery();
  const orders: Order[] = [];
  data?.allOrders?.forEach((order) => {
    if (order) {
      orders.push(order);
    }
  });

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <DesktopSidebar />
      <div className="flex-1 overflow-auto focus:outline-none" tabIndex={0}>
        <TopNav />
        <main className="relative z-0 flex-1 pb-8 overflow-y-auto">
          <WelcomeBanner />
          <RecentActivity loading={loading} orders={orders} />
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
