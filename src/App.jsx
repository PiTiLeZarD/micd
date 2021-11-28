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
                    This is 4 chunks 16x16x64, aired up a little, bricks that touch all other bricks are removed from
                    the chunk, chunks aren't aware of other chunks (we're reaching the limit of memory/cpu there)
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
                        <Chunk position={[0, 0]} data={generateChunk(16, 16, 64)} />
                        <Chunk position={[1, 0]} data={generateChunk(16, 16, 64)} />
                        <Chunk position={[1, 1]} data={generateChunk(16, 16, 64)} />
                        <Chunk position={[1, 0]} data={generateChunk(16, 16, 64)} />
                    </TexturesContextProvider>
                </Canvas>
            </Suspense>
        </ErrorBoundary>
    );
};

export default App;
