import {Container} from "@mui/material";
import {FristPage} from "./component/FristPage.jsx";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "./component/Home.jsx";
import {Supplier} from "./controller/Supplier.jsx";
import {ListNav} from "./component/ListNav.jsx";
import {Product} from "./controller/Product.jsx";


function App() {


    return(<Container>

            <ListNav/>
            <Routes>
                <Route path='/'element={<FristPage/>}></Route>
            </Routes>
            <Routes>
                <Route path='/frist' element={<Home/>}></Route>
                <Route path='/supplier' element={<Supplier/>}></Route>
                <Route path='/Product' element={<Product/>}></Route>
            </Routes>
    </Container>
    )
}

export default App
