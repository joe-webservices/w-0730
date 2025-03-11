
import React from 'react';
import { MessageSquare, RotateCcw, Copy } from 'lucide-react';

interface MessageProps {
  content: string;
  isUser: boolean;
  timestamp?: string;
}

const Message: React.FC<MessageProps> = ({ content, isUser }) => {
  return (
    <div className="flex items-start mb-4 gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? 'bg-adam-gray text-white' : 'bg-adam-pink text-white'}`}>
        {isUser ? (
          'JP'
        ) : (
          <MessageSquare size={16} />
        )}
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center mb-1">
          <span className="text-xs font-medium text-white/70">
            {isUser ? 'Jean Paul Gautier' : 'Adam Object'} 
          </span>
          <span className="ml-2 text-xs text-white/40">
            <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs rounded-full bg-adam-gray/50">
              #1
            </span>
          </span>
        </div>
        <p className="text-sm text-white leading-relaxed">{content}</p>
        {!isUser && (
          <div className="flex items-center mt-2 gap-2">
            <button className="text-xs bg-adam-gray/50 hover:bg-adam-gray text-white/70 py-1 px-2 rounded-md flex items-center gap-1 transition-colors">
              <RotateCcw size={12} />
              <span>Restart</span>
            </button>
            <button className="text-xs bg-adam-gray/50 hover:bg-adam-gray text-white/70 py-1 px-2 rounded-md flex items-center gap-1 transition-colors">
              <Copy size={12} />
              <span>Copy</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ChatConversation: React.FC = () => {
  const messages = [
    {
      id: 1,
      content: "make a long block with 5 holes in a line on the side profile",
      isUser: true,
      timestamp: "1m ago"
    },
    {
      id: 2,
      content: "center the holes",
      isUser: true,
      timestamp: "1m ago"
    },
    {
      id: 3,
      content: "above each hole, extrude a slit that is half the width of the hole",
      isUser: true,
      timestamp: "30s ago"
    },
    {
      id: 4,
      content: "fillet the edges",
      isUser: true,
      timestamp: "15s ago"
    }
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto p-4">
      {messages.map(message => (
        <Message 
          key={message.id}
          content={message.content}
          isUser={message.isUser}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default ChatConversation;
