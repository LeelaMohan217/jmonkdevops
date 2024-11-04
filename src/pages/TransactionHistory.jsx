import React from 'react';
import { motion } from 'framer-motion';

const transactions = [
  { id: 1, description: 'Loan Payment', amount: -250.0, date: '2024-09-01' },
  { id: 2, description: 'Loan Disbursement', amount: 500.0, date: '2024-09-05' },
  { id: 3, description: 'Interest Payment', amount: -50.0, date: '2024-09-10' },
  // Add more transactions as needed
];

const TransactionHistory = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Transaction History</h2>
      <motion.ul
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
      >
        {transactions.map((transaction) => (
          <motion.li
            key={transaction.id}
            className={`p-4 border rounded-lg shadow ${
              transaction.amount < 0 ? 'bg-red-100 border-red-400' : 'bg-green-100 border-green-400'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{transaction.description}</span>
              <span
                className={`font-semibold ${
                  transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
            <div className="text-sm text-gray-500 mt-1">{transaction.date}</div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TransactionHistory;
