import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Desktop from "./Desktop";
import { useMediaQuery } from "react-responsive";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

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
          // maxDistance={18}
          // minDistance={3}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          enableZoom={isTablet}
        />
        <Desktop />
      </Canvas>
    </>
  );
};

export default HeroExperience;
