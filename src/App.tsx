import React from 'react';
import Chat from './components/Chat/Chat';
import Customizer from './components/Customizer/Customizer';

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900">
      <div className="w-full md:w-1/3 h-1/2 md:h-full">
        <Chat />
      </div>
      <div className="w-full md:w-2/3 h-1/2 md:h-full">
        <Customizer />
      </div>
    </div>
  );
}

export default App;
