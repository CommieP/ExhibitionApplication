import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import Desktop from "../Desktop";
import VRCanvas from "../VR";

const RoutesHOC = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path = "/homepage" Component={HomePage}></Route>
                <Route path = "/desktop" Component={Desktop}></Route>
                <Route path = "/VR" Component={VRCanvas}></Route>
                <Route exact path = "/" Component={HomePage}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesHOC