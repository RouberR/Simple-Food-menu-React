import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Footer = () => {
    return (

        <div className="footer">
            <div class="left-container">
            <GitHubIcon color="secondary" fontSize="large"/>
         
            </div>
            
            <div className="right-container">

                <InstagramIcon color="secondary" fontSize="large"/>
                <LinkedInIcon color="secondary" fontSize="large"/>
                <TelegramIcon color="secondary" fontSize="large"/>
                <FacebookIcon color="secondary" fontSize="large"/>
               
                
             
            </div>
        </div>

    )
}
