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

const surroundedInChunk = (chunk, x, y, z) =>
    chunk[z - 1][y][x] != null &&
    chunk[z][y - 1][x] != null &&
    chunk[z][y][x - 1] != null &&
    chunk[z + 1][y][x] != null &&
    chunk[z][y + 1][x] != null &&
    chunk[z][y][x + 1] != null;

const optimiseChunk = (chunk, chunkSize, chunkHeight) =>
    chunk.map((floor, z) => {
        if (z == 0 || z == chunkHeight - 1) return floor;
        return floor.map((row, y) => {
            if (y == 0 || y == chunkSize - 1) return row;
            return row.map((brick, x) => {
                if (brick == null || x == 0 || x == chunkSize - 1 || surroundedInChunk(chunk, x, y, z)) return null;
                return brick;
            });
        });
    });

export const generateChunk = (cx, cy, chunkSize, chunkHeight) => {
    const chunk = new Array(chunkHeight)
        .fill(null)
        .map((_, z) =>
            new Array(chunkSize)
                .fill(null)
                .map((__, y) => new Array(chunkSize).fill(null).map((___, x) => randomBrick(x, y, z, chunkHeight)))
        );
    return optimiseChunk(chunk, chunkSize, chunkHeight);
};
