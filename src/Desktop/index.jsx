import { useSelector } from "react-redux"
import { Canvas } from "@react-three/fiber";
import GLTFModel from "../ThreeComponents/GLTFModel";
import DesktopControls from "../ThreeComponents/DesktopControls";
import data from "../data";
import DeskPopUp from "./DeskPopUp";
import { useState } from "react";

const Desktop = () => {
    const index = useSelector((state) => state.IndexReducer.value);
    let sceneData = data[index].sceneData;
    console.log(sceneData);

    const [isPopUpVisible, setIsPopUpVisible] = useState(true) ;
    const togglePopUp = () => {
        setIsPopUpVisible(!isPopUpVisible)
    }
    
    return (
        <>
            <Canvas className="w-screen h-full absolute top-0 left-0">
                <ambientLight intensity={sceneData.lightIntensity} />
                <GLTFModel url={data[index].url} position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: sceneData.modelScale, y: sceneData.modelScale, z: sceneData.modelScale }}></GLTFModel>
                <DesktopControls initialCameraPosition={{ x: sceneData.cameraPosition.x, y: sceneData.cameraPosition.y, z: sceneData.cameraPosition.z }} initialCameraRotation = {{ y: sceneData.cameraRotation.y}}spacePressed = {togglePopUp}></DesktopControls>
            </Canvas>
            <DeskPopUp visible = {isPopUpVisible}></DeskPopUp>
        </>

    )
}

export default Desktop