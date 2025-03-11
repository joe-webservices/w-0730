
import React from 'react';
import { X } from 'lucide-react';

interface SliderProps {
  label: string;
  value: number;
  max: number;
  min?: number;
  step?: number;
  onChange: (value: number) => void;
}

const ParameterSlider: React.FC<SliderProps> = ({ 
  label, 
  value, 
  max, 
  min = 0, 
  step = 1, 
  onChange 
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <label className="text-sm text-white">{label}</label>
        <span className="text-sm text-white">{value}</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1 bg-adam-gray appearance-none rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-adam-pink"
        />
      </div>
    </div>
  );
};

const ParametersPanel: React.FC = () => {
  const [length, setLength] = React.useState(100);
  const [width, setWidth] = React.useState(20);
  const [height, setHeight] = React.useState(20);
  const [holeDiameter, setHoleDiameter] = React.useState(8);
  const [holeSpacing, setHoleSpacing] = React.useState(15);
  const [filletRadius, setFilletRadius] = React.useState(2);
  const [color, setColor] = React.useState('#FF3B9A');
  
  return (
    <div className="h-full flex flex-col bg-adam-dark border-l border-white/10">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5"/>
            <path d="M19.4 15C19.1277 15.8031 19.2134 16.6791 19.6415 17.4122C20.0696 18.1453 20.8028 18.6653 21.6 18.8589V19.1984C20.8013 19.3932 20.0661 19.9147 19.6374 20.6491C19.2087 21.3835 19.1237 22.2603 19.397 23.0643C18.5946 22.7988 17.7199 22.8295 16.9394 23.1499C16.1589 23.4703 15.5297 24.0659 15.175 24.8232H14.825C14.4705 24.0651 13.8408 23.4691 13.0596 23.1488C12.2784 22.8286 11.4031 22.7983 10.6 23.0643C10.8742 22.2606 10.7901 21.384 10.3622 20.6496C9.93427 19.9153 9.19965 19.3936 8.4 19.1984V18.8589C9.1972 18.6653 9.93044 18.1453 10.3585 17.4122C10.7866 16.6791 10.8723 15.8031 10.6 15C11.4031 15.266 12.2784 15.2357 13.0596 14.9155C13.8408 14.5952 14.4705 13.9992 14.825 13.2411H15.175C15.5295 13.9992 16.1592 14.5952 16.9404 14.9155C17.7216 15.2357 18.5969 15.266 19.4 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12C2 10.4178 2.4692 8.87104 3.34824 7.55544C4.22728 6.23985 5.47672 5.21447 6.93853 4.60897C8.40034 4.00347 10.0089 3.84504 11.5607 4.15372C13.1126 4.4624 14.538 5.22433 15.6569 6.34315C16.7757 7.46197 17.5376 8.88743 17.8463 10.4393C18.155 11.9911 17.9965 13.5997 17.391 15.0615C16.7855 16.5233 15.7602 17.7727 14.4446 18.6518C13.129 19.5308 11.5823 20 10 20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-white">Parameters</span>
        </div>
        <button className="text-white/70 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <ParameterSlider label="Length" value={length} max={200} onChange={setLength} />
        <ParameterSlider label="Width" value={width} max={50} onChange={setWidth} />
        <ParameterSlider label="Height" value={height} max={50} onChange={setHeight} />
        <ParameterSlider label="Hole Diameter" value={holeDiameter} max={15} onChange={setHoleDiameter} />
        <ParameterSlider label="Hole Spacing" value={holeSpacing} max={30} onChange={setHoleSpacing} />
        <ParameterSlider label="Fillet Radius" value={filletRadius} max={10} step={0.5} onChange={setFilletRadius} />
        
        <div className="mt-6">
          <div className="w-full h-40 mb-4 rounded-md overflow-hidden">
            <div 
              className="w-full h-full"
              style={{
                background: `linear-gradient(to bottom, white, transparent), 
                            linear-gradient(to right, ${color}88, ${color}), 
                            linear-gradient(to top, black, transparent)`
              }}
            >
              <div className="flex justify-end p-2">
                <div className="w-6 h-6 rounded-full border-2 border-white bg-adam-pink relative">
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border border-adam-gray"></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-6 w-full rounded-md mb-4" style={{ 
            background: 'linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)'
          }}>
            <div className="flex justify-end">
              <div className="w-4 h-8 -mt-1 bg-white border border-adam-gray rounded-full"></div>
            </div>
          </div>
          
          <button className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 transition-colors rounded-md text-white text-sm flex items-center justify-center gap-2 mb-2">
            <span className="font-mono">STL</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParametersPanel;
