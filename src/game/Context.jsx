import React, { useState } from "react";
import { generateChunk } from "../utils";

const chunkSize = 16;
const chunkHeight = 32;
const getChunk = (x, y) => generateChunk(x, y, chunkSize, chunkHeight);

export const GameContext = React.createContext({});

export const GameContextProvider = ({ children }) => {
    const [playerPosition, setPlayerPosition] = useState([0, 0, chunkHeight / 2]);
    return (
        <GameContext.Provider value={{ playerPosition, setPlayerPosition, chunkSize, chunkHeight, getChunk }}>
            {children}
        </GameContext.Provider>
    );
};
