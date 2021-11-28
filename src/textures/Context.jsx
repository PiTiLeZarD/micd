import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import textures from "./imgs";

export const TexturesContext = React.createContext({});

export const TexturesContextProvider = ({ children }) => {
    const loadedTextures = Object.fromEntries(
        Object.entries(textures).map(([key, value], k) => [key, useLoader(TextureLoader, value)])
    );
    return <TexturesContext.Provider value={loadedTextures}>{children}</TexturesContext.Provider>;
};
