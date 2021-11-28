import { useContext } from "react";
import { Brick, bricks } from "../bricks";
import { GameContext } from "./Context";

const Chunk = ({ position: [x, y] }) => {
    const { getChunk, chunkSize } = useContext(GameContext);
    const data = getChunk(x, y);

    return data.map((floor, cz) =>
        floor.map((row, cy) =>
            row.map((r, cx) =>
                r == null ? null : (
                    <Brick
                        config={bricks[Object.keys(bricks)[r]]}
                        key={`${x}.${y}/${cx}.${cy}.${cz}`}
                        position={[cx + x * chunkSize, cz, cy + y * chunkSize]}
                    />
                )
            )
        )
    );
};

export default Chunk;
