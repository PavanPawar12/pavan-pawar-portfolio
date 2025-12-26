import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as random from "maath/random";


function Stars() {
  const ref = useRef();

  // Generate random star positions
  const positions = random.inSphere(new Float32Array(5000), {
    radius: 1.5,
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * 0.02;
    ref.current.rotation.y -= delta * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.003}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function StarsBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      <Stars />
    </Canvas>
  );
}



// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useMemo } from "react";
// import * as THREE from "three";

// function WarpStars() {
//   const points = useRef();

//   // Create stars only once
//   const starPositions = useMemo(() => {
//     const count = 6000;
//     const positions = new Float32Array(count * 3);

//     for (let i = 0; i < count; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 20; // X
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Y
//       positions[i * 3 + 2] = -Math.random() * 50; // Z (depth)
//     }

//     return positions;
//   }, []);

//   useFrame((_, delta) => {
//     const positions = points.current.geometry.attributes.position.array;

//     for (let i = 0; i < positions.length; i += 3) {
//       positions[i + 2] += delta * 20; // move star forward

//       // If star reaches camera → reset back
//       if (positions[i + 2] > 5) {
//         positions[i + 2] = -50;
//       }
//     }

//     points.current.geometry.attributes.position.needsUpdate = true;
//   });

//   return (
//     <points ref={points}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={starPositions.length / 3}
//           array={starPositions}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         color="#ffffff"
//         size={0.05}
//         transparent
//         opacity={0.8}
//         depthWrite={false}
//       />
//     </points>
//   );
// }

// export default function StarsBackground() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 5], fov: 75 }}
//       style={{
//         position: "absolute", // IMPORTANT: for Hero only
//         inset: 0,
//         zIndex: 0,
//       }}
//     >
//       <WarpStars />
//     </Canvas>
//   );
// }
