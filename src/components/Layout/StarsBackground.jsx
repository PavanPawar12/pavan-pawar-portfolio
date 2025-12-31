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
