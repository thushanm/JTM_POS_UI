import React from 'react';
import {Button, Container} from "@mui/material";
import {Link, NavLink, Route, Routes, useNavigate} from "react-router-dom";

export const FristPage = (props) => {
const navigate =useNavigate();
    return(<Container >

        <nav >

   <img src="src/assets/1.png" alt="LOGO" style={{width:'10%'}}/>

        </nav>

        <img src="src/assets/699c12add537ebe553d4801186b587b4.gif" alt="welcomeGIf" style={{width:'80%'}}/>
     <NavLink to='frist'>LOG IN</NavLink>
    </Container>)

}


