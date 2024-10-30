import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './components/Scene';

function App() {
  const [shape, setShape] = useState('box');
  const [color, setColor] = useState('#ff0000');

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ margin: '10px' }}>Three.js Shape Switcher</h1>
      
      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <button onClick={() => setShape('box')}>Box</button>
        <button onClick={() => setShape('sphere')}>Sphere</button>
        <button onClick={() => setShape('cone')}>Cone</button>
        <button onClick={() => setShape('torus')}>Torus</button>
        <button onClick={() => setShape('torusKnot')}>Torus Knot</button>
        <button onClick={() => setShape('octahedron')}>Octahedron</button>
        <button onClick={() => setShape('dodecahedron')}>Dodecahedron</button>
        <button onClick={() => setShape('icosahedron')}>Icosahedron</button>
        <button onClick={() => setShape('tetrahedron')}>Tetrahedron</button>
        <button onClick={() => setShape('plane')}>Plane</button>        
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          style={{ marginLeft: 'auto' }} 
        />
      </div>

      <Canvas style={{ flex: 1 }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene shape={shape} color={color} />
      </Canvas>
    </div>
  );
}

export default App;
