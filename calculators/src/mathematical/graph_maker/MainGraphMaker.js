import React from 'react';
import { Container, Typography } from '@mui/material';

function MainGraphMaker(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Graph Maker</Typography>
            <hr/>
            <br/>
        </Container>
    )
}

export default MainGraphMaker;