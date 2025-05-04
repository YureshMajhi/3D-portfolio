import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Desktop from "./Desktop";

const HeroExperience = () => {
  return (
    <>
      <Canvas>
        <primitive
          object={new THREE.RectAreaLight("#cb1fcb", 8, 4, 2)}
          position={[1, 3, 4]}
          intensity={135}
          rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />
        <OrbitControls
          maxDistance={12}
          minDistance={3}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
        <Desktop />
      </Canvas>
    </>
  );
};

export default HeroExperience;
