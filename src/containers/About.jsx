import "../index.scss"
import aboutPicture from '../assets/moi.png';

function Skills() {
    return (
        <div className='about_wrapper'>
            <h2 className="about_title">Présentation</h2>
            <section className="aboutDetails_wrapper">
                <img src={ aboutPicture } alt="aboutPicture" className="about_picture" />
                <p className="about_description">Hello,<br/><br/>Moi c'est Angie, j'ai 29 ans et je suis passionnée par le développement web.<br/><br/>Je travaille avec différents outils et langages comme React, JavaScript ou encore Github.<br/><br/>Je vous souhaite la bienvenue ici !</p>
            </section>
        </div>
    )
}

export default Skills