import { Brick, bricks } from "../bricks";

const Chunk = ({ position: [x, y], data }) => {
    return data.map((floor, cz) =>
        floor.map((row, cy) =>
            row.map((r, cx) =>
                r == null ? null : (
                    <Brick
                        config={bricks[Object.keys(bricks)[r]]}
                        key={`${x}.${y}/${cx}.${cy}.${cz}`}
                        position={[cx + x * data[0][0].length, cz, cy + y * data[0].length]}
                    />
                )
            )
        )
    );
};

export default Chunk;
