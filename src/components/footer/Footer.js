import React from 'react'
import './footer.css'
import rsLogo from './rs_school_logo.png'
import gitLogo from './GitHub.png'
import ThemeSwitch from '../ThemeSwitch';

const Footer = () => {
    return(
       <div className = 'footer'>
            <p className  = 'copyright'> Created by &nbsp; 
                <a 
                    href = 'https://github.com/StasyTyapkina'
                    target = '_blank'
                    rel = 'noopener noreferrer'>
                    A.Tyapkina
                </a>
                &nbsp; 2021
            </p>   
            <a 
                className = 'link' 
                href = 'https://rs.school/index.html' 
                target = '_blank'
                rel = 'noopener noreferrer'>
                <img  
                    className = 'logo'
                    src = {rsLogo} 
                    alt = 'logo' />
            </a>
            <a 
                className = 'link'
                href = 'https://github.com/StasyTyapkina'
                target = '_blank'
                rel = 'noopener noreferrer'>
                <img 
                    className = 'logo'
                    src = {gitLogo} 
                    alt = 'logo'/>
            </a>

            <ThemeSwitch preserveRaster = 'true'/>

        </div>
    ) 
  }
  
  export default Footer
  


