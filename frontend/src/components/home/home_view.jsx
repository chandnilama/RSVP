import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, Redirect, useHistory } from "react-router-dom";

import HomeItem from './home_view_Item';
import HomeViewItem from "./home_view_Item"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  minWidth: '100%',
  maxHeight: '100%',
  cover: true
});

const sections = [
  { title: 'Technology', url: '/discover/technology' },
  { title: 'Design', url: '/discover/design' },
  { title: 'Culture', url: '/discover/culture' },
  { title: 'Business', url: '/discover/business' },
  { title: 'Politics', url: '/discover/politics' },
  { title: 'Opinion', url: '/discover/opinion' },
  { title: 'Science', url: '/discover/science' },
  { title: 'Health', url: '/discover/health' },
  { title: 'Style', url: '/discover/style' },
  { title: 'Travel', url: '/discover/travel' },
];

const theme = createTheme();
export default function HomePage({openModal}){
    const [tabSelect, setTabSelect] = useState('Nearby')
    
    return(
        <ThemeProvider theme={theme} >
            <CssBaseline />
         <Paper
            sx={{
                boxShadow: 2,
                
                width: 1,
                flexGrow: 1,
                elevation: 24,
                
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
                
                <Grid container maxWidth='xlg' spacing={2}>
                    <Grid 
                    item 
                    container
                    direction='row'
                    justifyContent="center"
                    sx={{ overflow: false, margin: 1}}>
                       
                        <Img alt="complex" src="https://pichaven.s3.us-east-2.amazonaws.com/27780ec6e7e9b3d2a594dcd498dac873" />
                        
                    </Grid>
                    
                    <Grid 
                        container
                        direction='row'
                        justifyContent="center">
                        <ButtonGroup color="secondary" aria-label="medium secondary button group" className="project-show-tab-nav">
                            <Button onClick={()=> openModal('RSVP')}>RSVP</Button>
                        </ButtonGroup>
                    </Grid>
                    {/* <Grid 
                        container
                        direction='row'
                        justifyContent="center"
                        alignItems="center">
                        
                        <ButtonGroup color="secondary" aria-label="medium secondary button group" className="project-show-tab-nav">
                            <Button className="project-show-tab-button" onClick={()=> setTabSelect('Nearby')}>Nearby</Button>
                            <Button className="project-show-tab-button" onClick={()=> setTabSelect('Friends')}>Friends</Button>
                            <Button className="project-show-tab-button" onClick={()=> setTabSelect('Following')}>Following</Button>
                        </ButtonGroup>
                    </Grid> */}
                </Grid>
                


                
                
            </Paper>
            

        </ThemeProvider>
    )
}

