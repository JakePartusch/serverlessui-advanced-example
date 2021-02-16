import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import type { Order } from '../generated/graphql-hooks';
import OrderRow from './order/OrderRow';

interface RecentActivityProps {
  loading: boolean;
  orders?: Order[];
}

const RecentActivity = ({ orders, loading }: RecentActivityProps) => (
  <div className="mt-8">
    <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
      Recent activity
    </h2>
    {loading && (
      <div className="max-w-6xl mx-auto flex justify-center mt-8">
        <ClipLoader />
      </div>
    )}
    {!loading && (
      <div className="hidden sm:block">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mt-2">
            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders?.map((order) => (
                    <OrderRow key={order.id} order={order} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default RecentActivity;
