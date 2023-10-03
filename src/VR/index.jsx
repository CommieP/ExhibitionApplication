import { Canvas } from "@react-three/fiber";
import { Controllers, VRButton, XR} from "@react-three/xr";
import GLTFModel from "../ThreeComponents/GLTFModel";
import { useSelector } from "react-redux/es/hooks/useSelector";
import data from "../data";


const VRCanvas = () => {
    const index = useSelector((state) => state.IndexReducer.value);
    let sceneData = data[index].sceneData;

    return(
        <>
            <VRButton></VRButton>
            <Canvas>
                <XR>
                    <ambientLight intensity={sceneData.lightIntensity} />
                    <Controllers></Controllers>
                    <GLTFModel url={data[index].url} position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: sceneData.modelScale, y: sceneData.modelScale, z: sceneData.modelScale }}></GLTFModel>
                </XR>
            </Canvas>
        </>
    )
}

export default VRCanvas

