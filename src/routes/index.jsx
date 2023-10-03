import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import Desktop from "../Desktop";
import VR from "../VR";

const RoutesHOC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/homepage" Component={HomePage}></Route>
                <Route path = "/desktop" Component={Desktop}></Route>
                <Route path = "/VR" Component={VR}></Route>
                <Route exact path = "/" Component={HomePage}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesHOC