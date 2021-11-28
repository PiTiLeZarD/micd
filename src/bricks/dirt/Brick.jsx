import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import dirtImg from "../grass/bottom.png";

const GrassBrick = (props) => {
    const ref = useRef();

    const dirtTexture = useLoader(TextureLoader, dirtImg);

    return (
        <mesh {...props} ref={ref} scale={1}>
            <boxGeometry args={[4, 4, 4]} />

            <meshBasicMaterial attach="material" map={dirtTexture} />
        </mesh>
    );
};

export default GrassBrick;
