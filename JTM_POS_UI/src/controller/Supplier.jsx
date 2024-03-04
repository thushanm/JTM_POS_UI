import React from 'react';

import {Box, Container, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddBoxIcon from '@mui/icons-material/AddBox';


export const Supplier = () => {
    return (
        <Container>
<h1>ADD SUPPLIER</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h2 style={{backgroundColor:"black",color:"white",textAlign:"center"}} id="supId">Supplier_ID</h2>


                <TextField
                id="supName"
                label="Name"
                type="text"
                variant="filled"
            /><TextField
                id="supAddress"
                label="Address"
                type="text"
                variant="filled"
            /> <TextField
                id="pNumber"
                label="phoneNumber"
                type="number"
                variant="filled"
            /><Button variant="text" type="file" endIcon={<CloudUploadIcon/>}> Upload Image
            </Button>
                <br/>
                <br/>

               <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}
                > <Button sx={{backgroundColor:"black"}} variant="contained" endIcon={<AddBoxIcon />}>
                    Save Supplier
                </Button>
                </Box>
            </Box>
        </Container>
    );
};
