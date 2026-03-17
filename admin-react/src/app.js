import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('/api/ai/').then(res => res.json()).then(setData);
  }, []);

  return (
    <div className="react-app">
      <h2>React Admin Panel</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}