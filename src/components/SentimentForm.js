import React, { useState } from 'react';

function SentimentForm({ setResult }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <>
      <h2 className='text-2xl mb-5 font-serif'>Tell your emotions</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text here..." 
          className='h-40 w-full border-2 border-black rounded-md p-2 mb-4 resize-y'
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded"
        >
          Analyze Sentiment
        </button>
      </form>
    </>
  );
}

export default SentimentForm;
