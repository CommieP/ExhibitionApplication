import Tile from "./tile";

const TileGrid = ({ data , onTileClick}) => {
    return (
        <div className="grid grid-cols-3 gap-[10vh]">
            {data.map((item, index) => {
                console.log(item.name);
                return (
                    <Tile
                        key={index}
                        data ={item}
                        onTileClick = {onTileClick}
                    ></Tile>
                );
            })}
        </div>
    )
}

export default TileGrid
