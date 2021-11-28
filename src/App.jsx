import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import ErrorBoundary from "./ErrorBoundary";
import CameraControls from "./CameraControls";

import GrassBrick from "./bricks/grass/Brick";
import DirtBrick from "./bricks/dirt/Brick";
import CobbleStoneBrick from "./bricks/cobblestone/Brick";

const App = () => {
    const [brick, setBrick] = useState("grass");

    return (
        <ErrorBoundary
            renderError={(error) => (
                <pre>
                    <span dangerouslySetInnerHTML={{ __html: JSON.stringify(error, null, 2) }} />
                </pre>
            )}
        >
            <Suspense fallback={<p>Loading...</p>}>
                <label>
                    Type of brick:{" "}
                    <select onChange={(ev) => setBrick(ev.target.value)}>
                        <option value="grass">Grass</option>
                        <option value="dirt">Dirt</option>
                        <option value="cobblestone">CobbleStone</option>
                    </select>
                </label>

                <Canvas style={{ height: "500px" }}>
                    <CameraControls />
                    <ambientLight />
                    <pointLight position={[20, 20, 20]} />
                    {brick == "grass" && <GrassBrick position={[0, 0, 0]} />}
                    {brick == "dirt" && <DirtBrick position={[0, 0, 0]} />}
                    {brick == "cobblestone" && <CobbleStoneBrick position={[0, 0, 0]} />}
                </Canvas>
            </Suspense>
        </ErrorBoundary>
    );
};

export default App;
