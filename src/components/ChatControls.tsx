
import React from 'react';
import { ArrowUp } from 'lucide-react';

const ChatControls: React.FC = () => {
  const [prompt, setPrompt] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('rounded');

  const filters = [
    { id: 'rounded', label: 'Rounded slots' },
    { id: 'variable', label: 'Variable holes' },
    { id: 'textured', label: 'Textured surface' }
  ];
  
  return (
    <div className="p-4 border-t border-white/10 bg-adam-darker">
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`px-3 py-1.5 text-xs rounded-full whitespace-nowrap ${
              activeFilter === filter.id 
                ? 'bg-adam-pink text-white' 
                : 'bg-adam-gray/50 text-white/70 hover:bg-adam-gray/80'
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe an object..."
          className="w-full bg-adam-gray/50 border border-white/10 rounded-lg py-3 px-4 pr-12 text-sm text-white focus:outline-none focus:ring-1 focus:ring-adam-pink/50"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-adam-pink rounded-md p-2 hover:bg-opacity-80 transition-colors">
          <ArrowUp size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatControls;
