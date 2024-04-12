import { Link } from 'react-router-dom'; 

import github from '../assets/icon/github.png';
import linkedin from '../assets/icon/linkedin.png';

import '../index.scss'

function Footer() {
    return (
        <footer className="footer_wrapper">
            <div className='footer_logo_wrapper'>
            <Link target='_blank' className='github_link' to="https://github.com/AngieLeutard">
                <img className='githubLogo' src={ github } alt="logo" />
            </Link>
            <Link target='_blank' className='linkedin_link' to="https://www.linkedin.com/in/angie-leutard-319ba7109/">
                <img className='linkedinLogo' src={ linkedin } alt="logo" />
            </Link>
            </div>
            <p className="footer_text">© 2023 Angie Leutard, Tous droits réservés.</p>
        </footer> 
    )
}

export default Footer