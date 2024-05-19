import React, { useState } from 'react';
import SentimentForm from './components/SentimentForm';
import Result from './components/Result';
import InfoCards from './components/InfoCards';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center max-h-screen m-6">
        <h1 className='text-3xl font-bold underline'>SENTIMENT ANALYSIS</h1>
        <InfoCards />
        <div className='mt-10'>
          <SentimentForm setResult={setResult} />
        </div>
        {result && <Result result={result} />}
      </div>
    </div>
  );
}

export default App;
