import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IndexSetAction } from "../store/reducers/IndexSlicer";

const Tile = ({ data, onTileClick}) => {

    const isClickable = data.url !== ""

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if(isClickable){
            setIsHovered(true);
        }
        
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const tileClasses = `border-solid border-2 transition ease-in-out rounded-lg h-[25vw] flex flex-col items-center justify-center bg-cover bg-center
        ${isClickable ? "cursor-pointer border-black" : "cursor-default border-slate-500"}
        ${isHovered ? "border-[1vh] border-indigo-400" : ""}`;

    const imageStyle = {
        backgroundImage: isHovered ? `url(${data.imageurl})` : "none",
    };

    const tileTextStyle = {
        color: isClickable ? "black" : "gray", // Change text color to gray if data.url is empty
    };

    const dispatch = useDispatch();

    const handleClick = () => {
        if (isClickable){
            onTileClick(data)
        }
        dispatch(IndexSetAction.setIndex(data.index));
    }

    return (
        <div
            style={imageStyle}
            className={tileClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div
                className={`header3 transition ease-in-out duration-300 ${isHovered ? "opacity-0" : "opacity-100"
                    }`}
                style={tileTextStyle}
            >
                {data.name}
            </div>
            <div
                className={`tileText transition ease-in-out duration-300 ${isHovered ? "opacity-0" : "opacity-100"
                    }`}
                style={tileTextStyle}
            >
                {data.projectName}
            </div>
        </div>
    );
};

export default Tile;
