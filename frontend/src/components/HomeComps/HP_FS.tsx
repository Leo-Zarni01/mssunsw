import logo from '../../assets/MSS_Logo.webp'
import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const HP_FS = () => {
    return (
        <Box position="relative" display="inline-block" sx={{ width: '100%', height: "600pxs"}}>
        {/* <div style = {{ position:"relative", display:"inline-block",  width: '100%', height: "600pxs"}}>    */}
        <img src={logo} alt="Image" style={{ width: '100%', height: "600px", border: '1px solid black' }} />
            <Box
                position="absolute"
                top="40%"
                left="50%"
                style={{
                transform: 'translate(-50%, -50%)',
                }}
            >
                <Typography
                variant="h2"
                color="black"
                >
                Mingalar Par
                </Typography>
            </Box>
            <Box
                position="absolute"
                top="60%"
                left="50%"
                style={{
                transform: 'translate(-50%, -50%)',
                }}
            >
                <Typography
                variant="h4"
                color="black"
                >
                UNSW
                </Typography>
            </Box>
            <Box
                position="absolute"
                top="70%"
                left="50%"
                style={{
                transform: 'translate(-50%, -50%)',
                }}
            >
                <Typography
                variant="h4"
                color="black"
                >
                Myanmar Student Society
                </Typography>
            </Box>
        {/* </div> */}
        </Box> 
    )
}

export default HP_FS;

{/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
