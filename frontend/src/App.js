import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState({ title: 'Nothing...' });

  useEffect(() => {
    const getTitle = async () => {
      const result = await fetch('/api');
      const title = await result.json();
      setMessage(title)
    };
    getTitle();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          {message.title}
        </h2>
      </header>
    </div>
  );
}

export default App;
