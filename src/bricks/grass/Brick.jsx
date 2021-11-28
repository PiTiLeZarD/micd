import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import topImg from "./top.png";
import bottomImg from "./bottom.png";
import sideImg from "./side.png";
import { CubeTextures } from "../../utils";

/**
 * Texture order right, left, top, bottom, front, back
 */

const GrassBrick = (props) => {
    const ref = useRef();

    const topTexture = useLoader(TextureLoader, topImg);
    const sideTexture = useLoader(TextureLoader, sideImg);
    const bottomTexture = useLoader(TextureLoader, bottomImg);

    return (
        <mesh {...props} ref={ref} scale={1}>
            <boxGeometry args={[4, 4, 4]} />

            <CubeTextures
                top={topTexture}
                bottom={bottomTexture}
                front={sideTexture}
                back={sideTexture}
                left={sideTexture}
                right={sideTexture}
            />
        </mesh>
    );
};

export default GrassBrick;
