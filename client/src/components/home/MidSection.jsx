import React from 'react';

//component
import { imageURL } from '../../constants/data';

//MUI
import { Grid,styled } from '@mui/material'

const Wrapper = styled(Grid)`
    margin-top:10px;
    justify-content: space-between;
`
const Image= styled('img')(({theme})=>({
    marginTop: 10,
    width: '100%',
    [theme.breakpoints.down('md')]:{
        objectFit: 'cover',
        height:'120px'
    }
}));

export default function MidSection() {
  return (
    <>
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {
            imageURL.map(image=>(
                <Grid item lg={4} md={4} sm={12} xs={12}>
                <img src={image} alt='image' style={{width:'100%'}}/>
                </Grid>
            ))
        }
    </Wrapper>
    <Image src="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50" alt="healthcare"/>
    </>
  )
}
