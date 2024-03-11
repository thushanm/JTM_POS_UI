import React, {useEffect, useState} from 'react';

import {Box, Container, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddBoxIcon from '@mui/icons-material/AddBox';



export const Product = () => {

    const [pId, setpId] = useState(0)
    const [pName, setpName] = useState("")
    const [pAddress, setpAddress] = useState("")
    const [pPhoneNum, setpPhoneNum] = useState("")
    const [pImage, setpImage] = useState("")
    const [currentNumber, setCurrentNumber] = useState(1001);

    const handelClick=(e)=>{
        e.preventDefault();
        const product={pId,pName,pAddress,pPhoneNum,pImage}
        console.log(product)
        const formData = new FormData();
        formData.append('file', pImage);
        fetch("http://localhost:8082/api/v1/supplier/save",{
            method:"POST",
            headers:{"content-Type":"multipart/form-data"},
            body:formData

        }).then(()=>{
            console.log("add supplier added");
        })
    }





    const generateId = () => {
        // Generate and format the ID
        const formattedNumber = currentNumber.toString().padStart(3, '0');
        const newId = `S${formattedNumber}`;

        // Update the state with the incremented number
        setCurrentNumber(currentNumber + 1);

        // Return the generated ID (integer)
        return parseInt(newId.slice(1), 10); // Extract and convert to integer
    };

    const myId = generateId(); // Generates "P1001"
    console.log(myId);

    return (
        <Container>
            <h1>ADD PRODUCT</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <h2 style={{backgroundColor: "black", color: "white", textAlign: "center"}} id="supId">Product Id: {pId}</h2>

            </Box>
            <form>
                <TextField
                    id="itName"
                    label="ItemName"
                    type="text"
                    variant="filled"
                    value={pName}
                    onChange={(e)=>setpName(e.target.value)}
                /><TextField
                id="itPrice"
                label="Price"
                type="number"
                variant="filled"
                value={pAddress}
                onChange={(e)=>setpAddress(e.target.value)}
            /> <TextField
                id="pNumber"
                label="Qtc"
                type="number"
                variant="filled"
                value={pPhoneNum}
                onChange={(e)=>setpPhoneNum(e.target.value)}
            /><TextField  type="file"
                          value={pImage}
                          onChange={(e)=>setpImage(e.target.value)}
            > <CloudUploadIcon/>
            </TextField>
                <br/>
                <br/>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}
                > <Button sx={{backgroundColor: "black"}} variant="contained" endIcon={<AddBoxIcon/>} onClick={handelClick}>
                    Save Product
                </Button>
                </Box>
            </form>
        </Container>
    );
}