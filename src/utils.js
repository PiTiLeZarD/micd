import { Brick, bricks } from "./bricks";
import { Vector2 } from "three";

export const rotateTexture = (texture, angle) => {
    const rotatedTexture = texture.clone();
    rotatedTexture.rotation = (angle * Math.PI) / 180;
    rotatedTexture.needsUpdate = true;
    rotatedTexture.center = new Vector2(0.5, 0.5);
    return rotatedTexture;
};

const randomBrick = () => (props) => {
    const r = parseInt(Math.random() * (Object.keys(bricks).length + 4));
    if (r >= Object.keys(bricks).length) return null;
    return <Brick config={bricks[Object.keys(bricks)[r]]} {...props} />;
};

export const generateChunk = (x, y, z) =>
    new Array(z).fill(new Array(y).fill(new Array(x).fill(null).map(randomBrick)));
