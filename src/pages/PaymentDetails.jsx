import React from 'react';
import { motion } from 'framer-motion';

const payments = [
  { id: 1, method: 'Credit Card', amount: 300.0, date: '2024-09-01', status: 'Completed' },
  { id: 2, method: 'Bank Transfer', amount: 450.0, date: '2024-09-05', status: 'Pending' },
  { id: 3, method: 'PayPal', amount: 150.0, date: '2024-09-10', status: 'Completed' },
  // Add more payment details as needed
];

const PaymentDetails = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Payment Details</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {payments.map((payment) => (
          <motion.div
            key={payment.id}
            className={`p-5 border rounded-lg shadow-lg ${
              payment.status === 'Completed' ? 'bg-green-100 border-green-400' : 'bg-yellow-100 border-yellow-400'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">{payment.method}</span>
              <span
                className={`font-semibold ${
                  payment.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                }`}
              >
                ${payment.amount.toFixed(2)}
              </span>
            </div>
            <div className="text-sm text-gray-500">Date: {payment.date}</div>
            <div className="text-sm text-gray-500">Status: {payment.status}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PaymentDetails;
