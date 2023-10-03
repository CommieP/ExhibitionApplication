import { useGLTF } from "@react-three/drei";
import sceneurl from "/assets/models/scene1.gltf?url"

const GLTFModel = ({url, rotation, position, scale }) => {

    console.log(rotation, position, scale);
    const model = useGLTF(sceneurl);

    model.scene.rotation.x = rotation.x || 0;
    model.scene.rotation.y = rotation.y || 0;
    model.scene.rotation.z = rotation.z || 0;

    model.scene.scale.set(scale.x, scale.y, scale.z);
    model.scene.position.set(position.x, position.y, position.z);

    return(
        <primitive object={model.scene}></primitive>
    )  
}

export default GLTFModel;