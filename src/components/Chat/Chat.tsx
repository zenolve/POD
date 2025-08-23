import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

interface Image {
  id: number;
  url: string;
  prompt: string;
}

const Chat: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Chat must be used within an AppProvider');
  }
  const { setSelectedImage } = context;

  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState<Image[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleGenerateImage = () => {
    if (!prompt) return;

    // Mock image generation
    const newImage: Image = {
      id: nextId,
      url: `https://picsum.photos/seed/${nextId}/200`, // Using picsum for placeholder images
      prompt: prompt,
    };

    setImages([...images, newImage]);
    setNextId(nextId + 1);
    setPrompt('');
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white">
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">AI Image Generator</h2>
        <div className="space-y-4">
          {images.map((image) => (
            <div key={image.id} className="p-4 bg-gray-700 rounded-lg">
              <img src={image.url} alt={image.prompt} className="w-full h-auto rounded-md mb-2" />
              <p className="text-sm text-gray-400 mb-2">{image.prompt}</p>
              <button
                onClick={() => setSelectedImage(image.url)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Use on Hoodie
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleGenerateImage()}
            placeholder="Enter a prompt to generate an image..."
            className="flex-grow bg-gray-700 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleGenerateImage}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
