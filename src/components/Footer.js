import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


export const Footer=()=>{
    return(
      <div className="footerBar">
          <a className="link" href="https://www.linkedin.com/in/Gautam-h-jagadale-78a899200"><LinkedInIcon className="icons"/></a> 
          <a className="link" href="https://github.com/Gautamjagdale21"><GitHubIcon className="icons"/></a>
          <a className="link" href="https://instagram.com/Gautamjagdale21"><InstagramIcon className="icons"/></a>
          <a className="link" href="https://twitter.com/Gautam_J_21"><TwitterIcon className="icons"/></a>          
           
      </div>
    )
}