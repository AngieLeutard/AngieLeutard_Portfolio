import "../index.scss"

import { Link } from 'react-router-dom'; 
import { useState, useEffect } from "react";

import PropTypes from 'prop-types';
import Github from '../assets/icon/github.png';
import Web from '../assets/icon/web.png';

function Card({picture, text, outils, description, GithubLink, WebLink}) {

    const [isActive, setIsActive] = useState(false);

    useEffect (() => {
        if (WebLink === "") setIsActive(true);
    }, [WebLink]);

    return (
        <div className="card_wrapper">
            <img src={ require('../assets/cards_pictures/' + picture) } alt="cardPicture" className="card_picture" />
            <section className="card_description_wrapper">
                <p className="card_details">{ description }</p>
                <div className="card_description">
                    <h3 className="card_title">Langages</h3>
                    <p className="card_text">{ text }</p>
                </div>
                <div className="card_description">
                    <h3 className="card_title">Outils</h3>
                    <p className="card_text">{ outils }</p>
                </div>
                <div className="card_icon_wrapper">
                    <Link target='_blank' to={ GithubLink } className="card_icon_link">
                        <img src={ Github } alt="github" className="card_icon"/>
                    </Link>
                    <Link target='_blank' to={ WebLink } className="card_icon_link" style={{display: isActive ? 'none' : 'block',}}>
                        <img src={ Web } alt="webIcon" className="card_icon"/>
                    </Link>
                </div>
            </section>
        </div>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    text: PropTypes.string,
    outils: PropTypes.string,
    description: PropTypes.string
}

export default Card