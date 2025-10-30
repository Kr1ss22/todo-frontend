import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <p>React frontend töötab!</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
