import React, { useEffect, useRef } from "react";
import { ProgrammerDesktop } from "./ProgrammerDesktop";
import { useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

const Desktop = () => {
  const desktopRef = useRef();
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    if (desktopRef.current) {
      desktopRef.current.rotation.y = Math.PI / 2;
    }
  }, []);

  useFrame(() => {
    if (desktopRef.current) {
      if (desktopRef.current.rotation.y > 0.3) {
        desktopRef.current.rotation.y -= 0.02;
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
