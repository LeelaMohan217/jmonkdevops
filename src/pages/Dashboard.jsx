import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const summaries = [
    {
      id: 1,
      title: 'Total Loans',
      value: '$50,000',
      bgColor: 'bg-blue-500',
      icon: '💰',
    },
    {
      id: 2,
      title: 'Active Loans',
      value: '120',
      bgColor: 'bg-green-500',
      icon: '✅',
    },
    {
      id: 3,
      title: 'Pending Payments',
      value: '$5,000',
      bgColor: 'bg-yellow-500',
      icon: '⏳',
    },
    {
      id: 4,
      title: 'New Applications',
      value: '15',
      bgColor: 'bg-purple-500',
      icon: '📝',
    },
  ];

  const transactions = [
    {
      id: 1,
      date: '2024-09-20',
      description: 'Loan disbursed to John Doe',
      amount: '$10,000',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-09-18',
      description: 'Payment received from Jane Smith',
      amount: '$500',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2024-09-15',
      description: 'Loan application submitted by Mike Johnson',
      amount: '$0',
      status: 'Pending',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Summary Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delayChildren: 0.2, staggerChildren: 0.2 },
          },
        }}
      >
        {summaries.map((summary) => (
          <motion.div
            key={summary.id}
            className={`flex items-center p-4 rounded-lg shadow-md ${summary.bgColor} text-white`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-3xl mr-4">{summary.icon}</div>
            <div>
              <h4 className="text-lg font-semibold">{summary.title}</h4>
              <p className="text-2xl">{summary.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Transactions */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="text-center">
                  <td className="py-2 px-4 border-b">{txn.date}</td>
                  <td className="py-2 px-4 border-b">{txn.description}</td>
                  <td className="py-2 px-4 border-b">{txn.amount}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        txn.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
              {transactions.length === 0 && (
                <tr>
                  <td colSpan="4" className="py-4 text-center">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
