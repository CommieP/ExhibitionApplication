import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PopUp = ({handleClose}) => {
    const index = useSelector((state) => state.IndexReducer.value);

    let navigate = useNavigate();

    const handleClick = () => {
        handleClose();
    }

    const handleDesktop = () => {
        navigate("/desktop")
    }

    const handleVR = () => {
        navigate("/VRCanvas")
    }

    return (
        <>
            <div className="fixed w-screen h-screen top-0 left-0 backdrop-blur-sm">
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-400 text-white w-[40vw] h-[40vh] z-10 border-black border-2 border-solid rounded-lg px-4 py-2">
                    <button className = "text-black header4 float-right hover:text-white" onClick={handleClick}>close</button>
                    <div className="header2 text-black text-center w-full mt-[15%]">Choose Device</div>
                    <div className="grid grid-cols-3 space-x-4 w-[90%] m-auto mt-8">
                        <button className = "text-black header4 rounded-lg border-black border-2 border-solid hover:text-white hover:border-white" onClick = {handleVR}>VR</button>
                        <button className = "text-black header4 rounded-lg border-black border-2 border-solid hover:text-white hover:border-white" onClick = {handleDesktop}>Desktop</button>
                        <button className = "text-slate-400 header4 rounded-lg border-slate-400 border-2 border-solid cursor-default">Mobile</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PopUp