const Chunk = ({ position: [x, y, z], data }) => {
    return data.map((floor, cz) =>
        floor.map((row, cy) =>
            row.map((RandomBrick, cx) => (
                <RandomBrick key={`${x}_${y}_${z}_${cx}_${cy}_${cz}`} position={[cx, cz, cy]} />
            ))
        )
    );
};

export default Chunk;
