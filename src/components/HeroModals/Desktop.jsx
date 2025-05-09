import React, { useEffect, useRef, useState } from "react";
import { ProgrammerDesktop } from "./ProgrammerDesktop";
import { useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

const Desktop = () => {
  const desktopRef = useRef();
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const [direction, setDirection] = useState(1);

  useFrame((state, delta) => {
    if (desktopRef.current) {
      desktopRef.current.rotation.x = 0.2;
      desktopRef.current.rotation.y += direction * delta * 0.04;

      const upperLimit = 0.2;
      const lowerLimit = -0.2;

      if (desktopRef.current.rotation.y >= upperLimit) {
        setDirection(-1);
      } else if (desktopRef.current.rotation.y <= lowerLimit) {
        setDirection(1);
      }
    }
  });
  return (
    <>
      <group position={[2, -2, isTablet ? -3 : -8]} ref={desktopRef}>
        <ProgrammerDesktop />
      </group>
    </>
  );
};

export default Desktop;
