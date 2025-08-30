import { Canvas } from "@react-three/fiber";
import React from "react";
import { Center, OrbitControls } from "@react-three/drei";
import { YellowDesktop } from "./Models/Desktop_simple";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
      <ambientLight intensity={0.5} color={"#fff4e6"} />
      <directionalLight
        position={[5, 5, 3]}
        castShadow
        intensity={2.5}
        color={"#ffd9b3"}
      />
      <directionalLight
        position={[5, 9, 1]}
        intensity={2.5}
        castShadow
        color={"#ffd9b3"}
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
      <Center>
        <group scale={79} rotation={[0, -2, 0]} position={[-7, -4.25, 4]} castShadow>
          <YellowDesktop />
        </group>

        <group scale={[1, 1, 1]}>
          <mesh receiveShadow position={[0, -3.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color={"#a46b2d"} />
          </mesh>
        </group>
      </Center>
    </Canvas>
  );
};

export default ContactExperience;
