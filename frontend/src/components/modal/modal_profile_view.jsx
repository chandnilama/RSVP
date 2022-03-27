import React, {useState, useEffect} from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import ModalProfileItem from './modal_profile_view_item';
import ModalProfileLocationItem from './modal_profile_location_item';

const Accordion = styled( (props) => (
    <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



export default function ModalProfileView({fetchUserLocations, userId, locations, closeModal, username, logout}){
    const [expanded, setExpanded] = useState("panel1")

    const handleChange = (panel) => (event, nextExpanded) => {
        setExpanded( nextExpanded ? panel : false)
    };

    const history = useHistory(); 
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Accordion key={username} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography >{`${username}`.toUpperCase()}</Typography>
                </AccordionSummary>
                <AccordionDetails className="project-list">                 
                    <Button  key="trade" onClick={() => {history.push(`/profile/${userId}`); closeModal();}} sx={{ my: 1, color: 'black', display: 'block' }}>
                                
                    <Typography textAlign="center">Profile</Typography>
                    </Button>
                    <Button  key="trade" onClick={ () => {history.push('/new-location'); closeModal();}} sx={{ my: 1, color: 'black', display: 'block' }}>  
                            <Typography textAlign="center">Create Location</Typography>
                    </Button>
                    <Button disabled key="trade" onClick={closeModal} sx={{ my: 1, color: 'black', display: 'block' }}>
                                
                    <Typography textAlign="center">Dashboard</Typography>
            </Button>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} >
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography>My Locations</Typography>
                </AccordionSummary>
                <AccordionDetails className="project-list">                 
                    {locations.length > 0 ? locations.map(location => (<ModalProfileLocationItem key={location._id} location={location}/>)) : null}
         
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>Notifications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                     
                    <Typography><EngineeringTwoToneIcon /> Under Construction</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Bookmarks</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography><EngineeringTwoToneIcon /> Under Construction</Typography>
                </AccordionDetails>
            </Accordion>
            <Button  key="trade" onClick={() => {logout(); closeModal(); history.push('/')}} sx={{ my: 1, color: 'black', display: 'block' }}>
                                
                    <Typography textAlign="center">Sign Out</Typography>
            </Button>
        </Box>
    )


}