import React from 'react'
import { Box ,Grid,Typography,Button} from '@mui/material'
import mobileimg from '../assets/mobile/image-hero@2x.jpg'
import arrowleft from '../assets/icon-arrow-left.svg'
const Header = () => {
  return (
    <Box minHeight={'100vh'}  >
       <Grid container spacing={2}>
             <Grid item>
                 <img width={'100%'} src={mobileimg} alt="" />
            </Grid> 
            <Grid p={6} display={'flex'} gap={2} flexDirection={'column'}>
               <Typography fontSize={60} fontFamily={'Big Shoulders Display'} fontWeight={'bold'} variant='h1'>MODERN <br /> ART GALLERY</Typography>
               <Typography sx={{color:'#444444', lineHeight:'25px', fontWeight:'lighter'}} variant='p'>The arts in the collection of the Modern Art Gallery all stated from a spark of inspiration. Will pieces inspire you? Visit us and find out.</Typography>
               <Box sx={{display:'flex', bgcolor:'black', color:'white'}}>
                  <Button sx={{}}>OUR LOCATION</Button>
                   <img sty src={arrowleft} alt="" />
               </Box>
            </Grid>
       </Grid>

    </Box>
  )
}

export default Header