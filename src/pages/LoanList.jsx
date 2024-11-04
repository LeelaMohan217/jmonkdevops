// LoanList.js
import React from "react";

const LoanList = ({ loans }) => {
  return (
    <div className="max-w-md mx-auto mt-10 flex flex-col gap-4">
      <h3 className="text-lg font-semibold mb-2 col-span-full">
        Loan Amounts:
      </h3>
      {loans.map((amount, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-lg shadow-md p-4 text-center"
        >
          <h4 className="text-xl font-bold text-red-600">
            ${amount.toFixed(2)}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default LoanList;
