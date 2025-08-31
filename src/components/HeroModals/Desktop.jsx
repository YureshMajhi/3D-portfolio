import { useRef } from "react";
import { ProgrammerDesktop } from "./ProgrammerDesktop";
import { useMediaQuery } from "react-responsive";
import { Float } from "@react-three/drei";

const Desktop = () => {
  const desktopRef = useRef();
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <Float speed={2.5}>
        <group position={[2, -2, isTablet ? -3 : -8]} ref={desktopRef}>
          <ProgrammerDesktop />
        </group>
      </Float>
    </>
  );
};

export default Desktop;
