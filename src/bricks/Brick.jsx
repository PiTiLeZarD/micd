import { useRef, useContext } from "react";

import { CubeTextures, TexturesContext } from "../textures";

/**
 * Texture order right, left, top, bottom, front, back
 */

const Brick = ({ config, ...otherProps }) => {
    const ref = useRef();
    const textures = useContext(TexturesContext);

    return (
        <mesh {...otherProps} ref={ref} scale={1}>
            <boxGeometry args={[4, 4, 4]} />

            {config.textures && <CubeTextures {...config.textures} />}
            {config.texture && <meshBasicMaterial attach="material" map={textures[config.texture]} />}
        </mesh>
    );
};

export default Brick;
