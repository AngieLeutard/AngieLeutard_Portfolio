import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import logoAL from '../assets/logoAngie/AngieLeutard.png';

function Header() {

  useEffect(() => {
    const sections = document.querySelectorAll("span")
    const navLi = document.querySelectorAll(".nav_link")
  
    window.onscroll = () => {
        var current = "";
        
        sections.forEach((section) => {
            const y = window.scrollY;
            const sectionTop = section.offsetTop;

            if (y >= sectionTop - 137 ) {
            current = section.getAttribute("id");
            }
        });
        
        navLi.forEach((a) => {
            a.classList.remove("active");
            if (a.classList.contains(current)) {
            a.classList.add("active");
            }
        });
    };
  }, []);
      
    return (
        <div className='header_wrapper'>
            <Link className='headerLogo_wrapper' to="/">
                <h1 className='header_logo'>Angie Leutard</h1>
                <p className='header_text_logo'>Développeuse Web Front</p>
            </Link>
            <section className='nav_wrapper'>
                <nav className='navbar'>
                    <a className='about nav_link active' href="#about">
                        À propos
                    </a>
                    <a className='projets nav_link' href='#projets'>
                        Projets
                    </a>
                    <a className='skills nav_link' href="#skills">
                        Compétences
                    </a>
                </nav>
            </section>
        </div>
    )
}

export default Header