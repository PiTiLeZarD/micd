import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import topImg from "./top.png";
import bottomImg from "./bottom.png";
import sideImg from "./side.png";
import { rotateTexture } from "../../utils";

const GrassBrick = (props) => {
    const ref = useRef();

    const topTexture = useLoader(TextureLoader, topImg);
    const sideTexture = useLoader(TextureLoader, sideImg);
    const bottomTexture = useLoader(TextureLoader, bottomImg);

    return (
        <mesh {...props} ref={ref} scale={1}>
            <boxGeometry args={[4, 4, 4]} />

            <meshBasicMaterial attachArray="material" map={topTexture} />
            <meshBasicMaterial attachArray="material" map={bottomTexture} />
            <meshBasicMaterial attachArray="material" map={rotateTexture(sideTexture, -90)} />
            <meshBasicMaterial attachArray="material" map={rotateTexture(sideTexture, -90)} />
            <meshBasicMaterial attachArray="material" map={rotateTexture(sideTexture, -90)} />
            <meshBasicMaterial attachArray="material" map={rotateTexture(sideTexture, 90)} />
        </mesh>
    );
};

export default GrassBrick;
