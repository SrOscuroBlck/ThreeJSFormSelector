import React from 'react';
import { Box, Sphere, Cone, Torus, TorusKnot, Octahedron, Dodecahedron, Icosahedron, Tetrahedron, Plane} from '@react-three/drei';

function Scene({ shape, color }) {
  return (
    <group rotation={[0.5, 0.5, 0]} position={[0, 0, 0]}>
      {shape === 'box' && (
        <Box args={[1, 1, 1]}>
          <meshBasicMaterial color={color} wireframe />
        </Box>
      )}
      {shape === 'sphere' && (
        <Sphere args={[1, 32, 32]}>
          <meshBasicMaterial color={color} wireframe />
        </Sphere>
      )}
      {shape === 'cone' && (
        <Cone args={[1, 2, 32]}>
          <meshBasicMaterial color={color} wireframe />
        </Cone>
      )}
      {shape === 'torus' && (
        <Torus args={[1, 0.4, 16, 100]}>
          <meshBasicMaterial color={color} wireframe />
        </Torus>
      )
      }
      {shape === 'torusKnot' && (
        <TorusKnot args={[1, 0.4, 100, 16]}>
          <meshBasicMaterial color={color} wireframe />
        </TorusKnot>
      )
      }
      {shape === 'octahedron' && (
        <Octahedron args={[1, 0]}>
          <meshBasicMaterial color={color} wireframe />
        </Octahedron>
      )
      }
      {shape === 'dodecahedron' && (
        <Dodecahedron args={[1, 0]}>
          <meshBasicMaterial color={color} wireframe />
        </Dodecahedron>
      )
      }
      {shape === 'icosahedron' && (
        <Icosahedron args={[1, 0]}>
          <meshBasicMaterial color={color} wireframe />
        </Icosahedron>
      )
      }
      {shape === 'tetrahedron' && (
        <Tetrahedron args={[1, 0]}>
          <meshBasicMaterial color={color} wireframe />
        </Tetrahedron>
      )
      }
      {shape === 'plane' && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <Plane args={[10, 10]}>
            <meshBasicMaterial color={color} wireframe />
          </Plane>
        </mesh>
      )}
    </group>
  );
}

export default Scene;
