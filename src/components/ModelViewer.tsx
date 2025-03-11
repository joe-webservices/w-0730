import React from 'react';
const ModelViewer: React.FC = () => {
  return <div className="h-full w-full flex items-center justify-center bg-[#0A080B]">
      <div className="relative">
        <img alt="3D Model" className="h-64 object-contain" src="https://cullen3ddesign.com/wp-content/uploads/2023/06/5-1200x1139.png" />
        
        {/* STL preview icon */}
        <div className="absolute bottom-0 right-0 bg-white p-2 rounded-md shadow-lg">
          <div className="text-[10px] text-black font-mono">STL</div>
          <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
            <div className="w-6 h-6 bg-white border border-gray-400"></div>
          </div>
        </div>
      </div>
    </div>;
};
export default ModelViewer;