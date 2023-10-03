import { useNavigate } from "react-router-dom";

const DeskPopUp = ({visible}) => {

    if (!visible) {
        return null;
      }
    
    return (
        <>
            <div className="fixed w-screen h-screen top-0 left-0 backdrop-blur-sm">
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-400 text-white w-[40vw] h-auto z-10 border-black border-2 border-solid rounded-lg px-4 py-2">
                    <div className="header2 text-black text-center w-full">Instructions</div>
                    
                        <div className="tileText text-center text-black">WASD to move</div>
                        <div className="tileText text-center text-black">Mouse to look</div>
                        <div className="tileText text-center text-black">Space to start/ pause</div>
                        <br></br>
                        <div className="tileText text-center text-black">Press Space to start </div>
                    
                </div>
            </div>
        </>

    )
}

export default DeskPopUp