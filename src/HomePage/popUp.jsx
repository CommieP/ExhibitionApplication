import { useSelector } from "react-redux";

const PopUp = ({handleClose}) => {
    const index = useSelector((state) => state.IndexReducer.value);

    const handleClick = () => {
        handleClose();
    }

    const handleDesktop = () => {
        if(index == 0){
            location.assign("https://commiep.github.io/PCLinks/");
        } else if (index == 1){
            location.assign("https://commiep.github.io/PCLinks/desk1.html");
        } else if (index == 2){
            location.assign("https://commiep.github.io/PCLinks/desk2.html");
        } else if (index == 3){
            location.assign("https://commiep.github.io/PCLinks/desk3.html");
        } else if (index == 4){
            location.assign("https://commiep.github.io/PCLinks/desk4.html");
        } else if (index == 5){
            location.assign("https://commiep.github.io/PCLinks/desk5.html");
        } else if (index == 8){
            location.assign("https://commiep.github.io/PCLinks/desk8.html");
        } else if (index == 9){
            location.assign("https://commiep.github.io/PCLinks/desk9.html");
        } else if (index == 11){
            location.assign("https://commiep.github.io/PCLinks/desk11.html");
        } else if (index == 12){
            location.assign("https://commiep.github.io/PCLinks/desk12.html");
        } else if (index == 14){
            location.assign("https://commiep.github.io/PCLinks/desk14.html");
        } else if (index == 15){
            location.assign("https://commiep.github.io/PCLinks/desk15.html");
        } else if (index == 16){
            location.assign("https://commiep.github.io/PCLinks/desk16.html");
        }
    }

    const handleVR = () => {
        if(index == 0){
            location.assign("https://commiep.github.io/PCLinks/vr0.html");
        } else if (index == 1){
            location.assign("https://commiep.github.io/PCLinks/vr1.html");
        } else if (index == 2){
            location.assign("https://commiep.github.io/PCLinks/vr2.html");
        } else if (index == 3){
            location.assign("https://commiep.github.io/PCLinks/vr3.html");
        } else if (index == 4){
            location.assign("https://commiep.github.io/PCLinks/vr4.html");
        } else if (index == 5){
            location.assign("https://commiep.github.io/PCLinks/vr5.html");
        } else if (index == 8){
            location.assign("https://commiep.github.io/PCLinks/vr8.html");
        } else if (index == 9){
            location.assign("https://commiep.github.io/PCLinks/vr9.html");
        } else if (index == 11){
            location.assign("https://commiep.github.io/PCLinks/vr11.html");
        } else if (index == 12){
            location.assign("https://commiep.github.io/PCLinks/vr12.html");
        } else if (index == 14){
            location.assign("https://commiep.github.io/PCLinks/vr14.html");
        } else if (index == 15){
            location.assign("https://commiep.github.io/PCLinks/vr15.html");
        } else if (index == 16){
            location.assign("https://commiep.github.io/PCLinks/vr16.html");
        }
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