import React from 'react'
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
            <a href="https://github.com/RouberR" target="_blank" rel="noreferrer"><GitHubIcon color="secondary" fontSize="large"/></a>
         
            </div>
            <p>2022 Rouber</p>
            <div className="right-container">

                <a href="https://www.instagram.com/rouuber/" target="_blank" rel="noreferrer"><InstagramIcon color="secondary" fontSize="large"/></a>
                <a href="https://www.linkedin.com/in/rouber/" target="_blank" rel="noreferrer"><LinkedInIcon color="secondary" fontSize="large"/></a>
                <a href="https://t.me/Rouber" target="_blank" rel="noreferrer"><TelegramIcon color="secondary" fontSize="large"/></a>
                <a href="https://web.facebook.com/evgen.fiadosenka.1/" target="_blank" rel="noreferrer"><FacebookIcon color="secondary" fontSize="large"/></a>
               
                
             
            </div>
        </div>

    )
}
