import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import cobblestoneImg from "./side.png";

const Brick = (props) => {
    const ref = useRef();

    const cobblestoneTexture = useLoader(TextureLoader, cobblestoneImg);

    return (
        <mesh {...props} ref={ref} scale={1}>
            <boxGeometry args={[4, 4, 4]} />

            <meshBasicMaterial attach="material" map={cobblestoneTexture} />
        </mesh>
    );
};

export default Brick;
