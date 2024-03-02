import {Container} from "@mui/material";
import {FristPage} from "./component/FristPage.jsx";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "./component/Home.jsx";


function App() {


    return(<Container>

            <Routes>
                <Route path='/'element={<FristPage/>}></Route>
                <Route path='frist' element={<Home/>}></Route>
            </Routes>
    </Container>
    )
}

export default App
