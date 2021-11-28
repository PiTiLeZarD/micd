import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";

import ErrorBoundary from "./ErrorBoundary";
import CameraControls from "./CameraControls";

import { Brick, bricks } from "./bricks";
import { TexturesContextProvider } from "./textures";

const App = () => {
    const [brick, setBrick] = useState(Object.keys(bricks)[0]);

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
                        {Object.keys(bricks).map((brickName, k) => (
                            <option key={k} value={brickName}>
                                {brickName}
                            </option>
                        ))}
                    </select>
                </label>

                <Canvas
                    style={{ height: "500px" }}
                    onCreated={({ gl }) => {
                        gl.toneMapping = NoToneMapping;
                    }}
                >
                    <CameraControls />
                    <ambientLight />
                    <pointLight position={[20, 20, 20]} />
                    <TexturesContextProvider>
                        <Brick position={[0, 0, 0]} config={bricks[brick]} />
                    </TexturesContextProvider>
                </Canvas>
            </Suspense>
        </ErrorBoundary>
    );
};

export default App;
