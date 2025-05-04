import React, { useEffect, useRef } from "react";
import { ProgrammerDesktop } from "./ProgrammerDesktop";
import { useFrame } from "@react-three/fiber";

const Desktop = () => {
  const desktopRef = useRef();

  useEffect(() => {
    if (desktopRef.current) {
      desktopRef.current.rotation.y = Math.PI / 2;
    }
  }, []);

  useFrame(() => {
    if (desktopRef.current) {
      if (desktopRef.current.rotation.y > 0) {
        desktopRef.current.rotation.y -= 0.02;
      }
    }
  });
  return (
    <>
      <group position={[2, -2, -2]} ref={desktopRef}>
        <ProgrammerDesktop />
      </group>
    </>
  );
};

export default Desktop;
