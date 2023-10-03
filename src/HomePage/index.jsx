import { useState } from "react";
import data from "../data"
import TileGrid from "./tilegrid"
import PopUp from "./popUp";

const HomePage = () => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const openPopup = () => {

        setIsPopUpVisible(true);
        console.log(isPopUpVisible);
    };


    const closePopup = () => {
        setIsPopUpVisible(false);
    };

    return (
        <>
            <div className="bg-indigo-300 w-screen box-border h-auto px-[5vw] py-[5vh]">
                {isPopUpVisible && (
                    <PopUp handleClose={closePopup} />
                )}
                <div className="header1 w-[70%] mb-8">Architectural Visualization in Virtual Reality</div>
                <div className="text w-[100%] mb-4">
                    The metaverse, a concept that has gained tremendous momentum in recent years, represents a transformative vision of the Internet. Imagine a digital realm where the boundaries between the virtual and physical worlds blur, giving rise to a 3D interpretation of the Internet.
                </div>
                <div className="text w-[100%] mb-4">
                    Over the course of this 3 week class, students, learnt how, to model, texture and light models for the WebVR platform. These skills have empowered the participants of this class to realize the vision of a 3D Internet.
                </div>

                <div className="header2 w-[100%] mb-16">
                    Explorations:
                </div>
                <TileGrid data={data} onTileClick={openPopup}></TileGrid>
            </div>
        </>
    )
}

export default HomePage