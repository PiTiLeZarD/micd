import { Fragment, useContext } from "react";
import { TexturesContext } from "./Context";

export const CubeTextures = ({ right, left, top, bottom, front, back }) => {
    const textures = useContext(TexturesContext);
    return (
        <Fragment>
            <meshBasicMaterial attachArray="material" map={textures[right]} />
            <meshBasicMaterial attachArray="material" map={textures[left]} />
            <meshBasicMaterial attachArray="material" map={textures[top]} />
            <meshBasicMaterial attachArray="material" map={textures[bottom]} />
            <meshBasicMaterial attachArray="material" map={textures[front]} />
            <meshBasicMaterial attachArray="material" map={textures[back]} />
        </Fragment>
    );
};
export default CubeTextures;
