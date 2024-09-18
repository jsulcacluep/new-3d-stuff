import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

export function App() {
  const cubeRef = useRef(null!);

  return (
    <>
      <OrbitControls />
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
