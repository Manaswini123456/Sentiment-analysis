import React from 'react';

const InfoCards = () => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-4">
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg mx-auto bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Neutral</div>
            <p className="text-white text-base">
              Neutral sentiment indicates an impartial or unbiased view. It often lacks strong positive or negative feelings. For example, a neutral sentiment might describe a product without expressing strong feelings either way.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-4">
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg mx-auto bg-gradient-to-br from-red-600 to-orange-700 text-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Negative</div>
            <p className="text-white text-base">
              Negative sentiment typically conveys a critical or unfavorable viewpoint. For instance, negative sentiment could be evident in a review that highlights issues or shortcomings of a product.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-4">
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg mx-auto bg-gradient-to-br from-green-600 to-green-900 text-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Positive</div>
            <p className="text-white text-base">
              Positive sentiment generally indicates a favorable or optimistic view. For example, positive sentiment might be expressed in a product review that highlights its excellent features and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
