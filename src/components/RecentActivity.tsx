import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import type { Order } from '../generated/graphql-hooks';

interface RecentActivityProps {
  loading: boolean;
  orders?: Order[];
}

interface OrderRowProps {
  order: Order;
}

export const formatPrice = (amount: number) => {
  if (isNaN(amount)) {
    return Number(0).toFixed(2);
  }
  let price: string = Number(Number(amount) / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(Number(price));
};

const OrderRow = ({ order }: OrderRowProps) => {
  return (
    <tr className="bg-white">
      <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        <div className="flex">
          <a href="#" className="group inline-flex space-x-2 truncate text-sm">
            <svg
              className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="text-gray-500 truncate group-hover:text-gray-900">
              Order from {order.customerFullName}
            </p>
          </a>
        </div>
      </td>
      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
        <span className="text-gray-900 font-medium">
          {formatPrice(order.totalPrice)}
        </span>{' '}
        USD
      </td>
      <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
          {order.status}
        </span>
      </td>
      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
        {new Date(order.createdDate).toLocaleDateString()}
      </td>
    </tr>
  );
};

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
