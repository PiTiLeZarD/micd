import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";

import ErrorBoundary from "./ErrorBoundary";
import CameraControls from "./CameraControls";

import { TexturesContextProvider } from "./textures";
import { Chunk, GameContextProvider } from "./game";

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
                <Canvas
                    style={{ height: "500px" }}
                    onCreated={({ gl }) => {
                        gl.toneMapping = NoToneMapping;
                    }}
                >
                    <CameraControls />
                    <ambientLight />
                    <pointLight position={[20, 20, 20]} />
                    <GameContextProvider>
                        <TexturesContextProvider>
                            {new Array(2)
                                .fill(null)
                                .map((_, x) =>
                                    new Array(2)
                                        .fill(null)
                                        .map((__, y) => <Chunk key={`${x}.${y}`} position={[0, 0]} />)
                                )}
                        </TexturesContextProvider>
                    </GameContextProvider>
                </Canvas>
            </Suspense>
        </ErrorBoundary>
    );
};

export default App;
