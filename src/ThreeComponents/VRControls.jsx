import { useThree} from "@react-three/fiber";
import { Controllers, XR} from "@react-three/xr";

const VRControls = ({cameraPosition}) => {

    const { camera } = useThree();
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

    return (
        <XR>
            <Controllers></Controllers>
        </XR>
    )
}

export default VRControls