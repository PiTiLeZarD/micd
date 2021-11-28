import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import ErrorBoundary from "./ErrorBoundary";
import GrassBrick from "./bricks/grass/Brick";
import CameraControls from "./CameraControls";

const App = () => (
    <ErrorBoundary
        renderError={(error) => (
            <pre>
                <span dangerouslySetInnerHTML={{ __html: JSON.stringify(error, null, 2) }} />
            </pre>
        )}
    >
        <Suspense fallback={<p>Loading...</p>}>
            <Canvas style={{ height: "500px" }}>
                <CameraControls />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <GrassBrick position={[0, 0, 0]} rotation={[0.5, 0.5, 0]} />
            </Canvas>
        </Suspense>
    </ErrorBoundary>
);

export default App;
