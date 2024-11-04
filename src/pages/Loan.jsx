import React, { useState } from 'react';
import LoanList from './LoanList'; // Import the LoanList component

const Loan = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanList, setLoanList] = useState([]);

  const handleAddLoan = () => {
    const amount = parseFloat(loanAmount);
    if (amount > 0) {
      setLoanList([...loanList, amount]);
      setLoanAmount('');
    } else {
      alert('Please enter a valid loan amount greater than 0');
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Loan Amount Tracker</h2>
        <div className="flex flex-col mb-4">
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="border border-gray-300 rounded p-2 mb-2"
            placeholder="Enter loan amount"
          />
          <button
            onClick={handleAddLoan}
            className="bg-red-600 text-white rounded p-2 hover:bg-red-700"
          >
            Add
          </button>
        </div>
      </div>
      <LoanList loans={loanList} />
    </>
  );
};

export default Loan;
