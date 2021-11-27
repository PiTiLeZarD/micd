import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import ErrorBoundary from "./ErrorBoundary";
import GrassBrick from "./bricks/grass/Brick";

const App = () => (
    <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
            <Canvas style={{ height: "500px" }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <GrassBrick position={[0, 0, 0]} rotation={[0.5, 0.5, 0]} />
            </Canvas>
        </Suspense>
    </ErrorBoundary>
);

export default App;
