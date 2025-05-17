
import React from 'react';
import { Zap } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#3563E9] text-white p-2 rounded-lg">
        <Zap size={20} />
      </div>
      <span className="text-[#192440] text-xl font-bold">AutoLead</span>
      <span className="text-[#3563E9] text-xl font-bold">Systems</span>
    </div>
  );
};

export default Logo;
