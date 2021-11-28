import { useRef, useContext } from "react";

import { CubeTextures, TexturesContext } from "../textures";

const Brick = ({ config, ...otherProps }) => {
    const ref = useRef();
    const textures = useContext(TexturesContext);

    return (
        <mesh {...otherProps} ref={ref} scale={1}>
            <boxGeometry args={[1, 1, 1]} />

            {config.textures && <CubeTextures {...config.textures} />}
            {config.texture && <meshBasicMaterial attach="material" map={textures[config.texture]} />}
        </mesh>
    );
};

export default Brick;
