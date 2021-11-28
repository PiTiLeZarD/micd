import { bricks } from "./bricks";
import { Vector2 } from "three";

export const rotateTexture = (texture, angle) => {
    const rotatedTexture = texture.clone();
    rotatedTexture.rotation = (angle * Math.PI) / 180;
    rotatedTexture.needsUpdate = true;
    rotatedTexture.center = new Vector2(0.5, 0.5);
    return rotatedTexture;
};

const randomBrick = (x, y, z, chunkHeight) => {
    if (z == 0) return Object.keys(bricks).indexOf("bedrock");
    if (z == chunkHeight / 2) return Object.keys(bricks).indexOf("grass");
    if (z > chunkHeight / 2) return null;
    return Object.keys(bricks).indexOf("stone");
};

const surroundingBricks = (chunk, x, y, z) => {
    if (x == 0 || y == 0 || z == 0 || z == chunk.length - 1 || y == chunk[0].length - 1 || x == chunk[0][0].length - 1)
        return [null];

    return [
        chunk[z - 1][y][x],
        chunk[z][y - 1][x],
        chunk[z][y][x - 1],
        chunk[z + 1][y][x],
        chunk[z][y + 1][x],
        chunk[z][y][x + 1],
    ];
};

const optimise = (chunk) =>
    chunk.map((floor, z) =>
        floor.map((row, y) =>
            row.map((brick, x) => {
                if (brick == null) return null;
                if (!surroundingBricks(chunk, x, y, z).includes(null)) return null;
                return brick;
            })
        )
    );

export const generateChunk = (cx, cy, chunkSize, chunkHeight) => {
    const chunk = new Array(chunkHeight)
        .fill(null)
        .map((_, z) =>
            new Array(chunkSize)
                .fill(null)
                .map((__, y) => new Array(chunkSize).fill(null).map((___, x) => randomBrick(x, y, z, chunkHeight)))
        );
    return optimise(chunk);
};
