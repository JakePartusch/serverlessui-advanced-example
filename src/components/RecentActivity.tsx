import React from 'react';
import type { Order } from '../generated/graphql-hooks';

interface RecentActivityProps {
  orders: Order[];
}

const RecentActivity = ({ orders }: RecentActivityProps) => (
  <div className="mt-8">
    <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
      Recent activity
    </h2>

    <div className="shadow sm:hidden">
      <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
        <li>
          <a href="#" className="block px-4 py-4 bg-white hover:bg-gray-50">
            <span className="flex items-center space-x-4">
              <span className="flex-1 flex space-x-2 truncate">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
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
                <span className="flex flex-col text-gray-500 text-sm truncate">
                  <span className="truncate">Payment to Molly Sanders</span>
                  <span>
                    <span className="text-gray-900 font-medium">$20,000</span>{' '}
                    USD
                  </span>
                  <span>July 11, 2020</span>
                </span>
              </span>
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>

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
                <tr className="bg-white">
                  <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex">
                      <a
                        href="#"
                        className="group inline-flex space-x-2 truncate text-sm"
                      >
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
                          Order from Molly Sanders
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                    <span className="text-gray-900 font-medium">$10.99 </span>
                    USD
                  </td>
                  <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                      success
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                    July 11, 2020
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecentActivity;
