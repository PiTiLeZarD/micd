import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { CubeTextureLoader } from "three/src/loaders/CubeTextureLoader";

import topImg from "./top.png";
import bottomImg from "./bottom.png";
import sideImg from "./side.png";

const GrassBrick = (props) => {
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.x += 0.02;
        ref.current.rotation.y += 0.01;
    });

    const [grassTexture] = useLoader(CubeTextureLoader, [[topImg, sideImg, sideImg, sideImg, sideImg, bottomImg]]);

    return (
        <mesh {...props} ref={ref} scale={1}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" map={grassTexture} />
        </mesh>
    );
};

export default GrassBrick;
