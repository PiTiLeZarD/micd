import React from "react";
import { Vector2 } from "three";

export const rotateTexture = (texture, angle) => {
    const rotatedTexture = texture.clone();
    rotatedTexture.rotation = (angle * Math.PI) / 180;
    rotatedTexture.needsUpdate = true;
    rotatedTexture.center = new Vector2(0.5, 0.5);
    return rotatedTexture;
};

export const CubeTextures = ({ right, left, top, bottom, front, back }) => (
    <React.Fragment>
        <meshBasicMaterial attachArray="material" map={right} />
        <meshBasicMaterial attachArray="material" map={left} />
        <meshBasicMaterial attachArray="material" map={top} />
        <meshBasicMaterial attachArray="material" map={bottom} />
        <meshBasicMaterial attachArray="material" map={front} />
        <meshBasicMaterial attachArray="material" map={back} />
    </React.Fragment>
);
