import React from 'react';

function Result({ result }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md mt-4">
      <div className="px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Sentiment Result: <span className="text-xl text-gray-700 font-bold ml-2">{result.sentiment}</span></h2>
      </div>
    </div>
  );
}

export default Result;
