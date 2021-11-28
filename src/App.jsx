import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";

import ErrorBoundary from "./ErrorBoundary";
import CameraControls from "./CameraControls";

import { TexturesContextProvider } from "./textures";
import Chunk from "./game/Chunk";
import { generateChunk } from "./utils";

const App = () => {
    return (
        <ErrorBoundary
            renderError={(error) => (
                <pre>
                    <span dangerouslySetInnerHTML={{ __html: JSON.stringify(error, null, 2) }} />
                </pre>
            )}
        >
            <Suspense fallback={<p>Loading...</p>}>
                <p>
                    This is a 16x16x128 chunk, aired up a little, bricks that touch all other bricks are removed from
                    the chunk
                </p>
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
                        <Chunk position={[0, 0]} data={generateChunk(16, 16, 128)} />
                    </TexturesContextProvider>
                </Canvas>
            </Suspense>
        </ErrorBoundary>
    );
};

export default App;
