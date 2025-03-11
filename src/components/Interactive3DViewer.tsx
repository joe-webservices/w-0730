
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

interface CubeProps {
  color: string;
  rotation: { x: number; y: number; z: number };
  autoRotate: boolean;
}

const Cube: React.FC<CubeProps> = ({ color, rotation, autoRotate }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current && autoRotate) {
      // Auto-rotate the cube slightly when auto-rotation is enabled
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    } else if (meshRef.current) {
      // Apply manual rotation
      meshRef.current.rotation.x = rotation.x;
      meshRef.current.rotation.y = rotation.y;
      meshRef.current.rotation.z = rotation.z;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Custom rotation control component
const RotationControl: React.FC<{
  axis: 'x' | 'y' | 'z';
  value: number;
  onChange: (value: number) => void;
  label: string;
}> = ({ axis, value, onChange, label }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-xs text-white/70">{label}</span>
        <span className="text-xs text-white/70">{Math.round(value * 180 / Math.PI)}°</span>
      </div>
      <input
        type="range"
        min="-3.14"
        max="3.14"
        step="0.01"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

const Interactive3DViewer: React.FC = () => {
  const [cubeColor, setCubeColor] = useState<string>('#FF3B9A'); // Default to adam-pink
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  
  const colors = [
    { name: 'Pink', value: '#FF3B9A' },
    { name: 'Blue', value: '#0EA5E9' },
    { name: 'Green', value: '#10B981' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Orange', value: '#F97316' },
  ];

  const handleRotationChange = (axis: 'x' | 'y' | 'z', value: number) => {
    setRotation(prev => ({ ...prev, [axis]: value }));
    if (autoRotate) setAutoRotate(false);
  };

  return (
    <div className="w-full aspect-video flex flex-row rounded-lg overflow-hidden bg-adam-darker/50 border border-white/10">
      {/* Left side: 3D viewer */}
      <div className="flex-1 relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Cube color={cubeColor} rotation={rotation} autoRotate={autoRotate} />
          {autoRotate && <OrbitControls enableZoom={false} />}
        </Canvas>
        
        {/* Labels on cube faces */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 pointer-events-none text-white opacity-60 text-xs">TOP</div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 pointer-events-none text-white opacity-60 text-xs">BOTTOM</div>
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 pointer-events-none text-white opacity-60 text-xs">LEFT</div>
        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 pointer-events-none text-white opacity-60 text-xs">RIGHT</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white opacity-60 text-xs">FRONT</div>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full flex gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                className="w-6 h-6 rounded-full transition-transform hover:scale-110 active:scale-95"
                style={{ backgroundColor: color.value, outline: cubeColor === color.value ? '2px solid white' : 'none' }}
                onClick={() => setCubeColor(color.value)}
                aria-label={`Set color to ${color.name}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right side: rotation controls */}
      <div className="w-64 p-4 bg-black/20 backdrop-blur-sm border-l border-white/10 flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-medium text-white">Rotation Controls</h3>
          <button 
            className={`text-xs px-3 py-1 rounded-full ${autoRotate ? 'bg-adam-pink text-white' : 'bg-white/10 text-white/70'}`}
            onClick={() => setAutoRotate(!autoRotate)}
          >
            {autoRotate ? 'Auto' : 'Manual'}
          </button>
        </div>

        <RotationControl 
          axis="x" 
          value={rotation.x} 
          onChange={(v) => handleRotationChange('x', v)} 
          label="X-Axis (Horizontal)"
        />
        <RotationControl 
          axis="y" 
          value={rotation.y} 
          onChange={(v) => handleRotationChange('y', v)} 
          label="Y-Axis (Vertical)"
        />
        <RotationControl 
          axis="z" 
          value={rotation.z} 
          onChange={(v) => handleRotationChange('z', v)} 
          label="Z-Axis (Depth)"
        />

        <div className="mt-4">
          <button 
            className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors"
            onClick={() => {
              setRotation({ x: 0, y: 0, z: 0 });
              setAutoRotate(true);
            }}
          >
            Reset Rotation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interactive3DViewer;
