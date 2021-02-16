import React from 'react';

const WelcomeBanner = () => (
  <div className="bg-white shadow">
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
      <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <img
              className="hidden h-16 w-16 rounded-full sm:block"
              src="/jake.jpg"
              alt=""
            />
            <div>
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-full sm:hidden"
                  src="/jake.jpg"
                  alt=""
                />
                <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                  Good morning, Jake
                </h1>
              </div>
              <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                <dt className="sr-only">Company</dt>
                <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                  <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Computers 'R' Us
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeBanner;
