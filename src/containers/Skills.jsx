import "../index.scss"
import skills from '../assets/skills.png';

function Skills() {
    return (
        <div className='skills_wrapper'>
            <h2 className="skills_title">Compétences</h2>
            <section className="skillsFlower_wrapper">
                <p className="skillsFlower_description">Outils et langages que j'utilise.</p>
                <img src={ skills } alt="skillsFlower" className="skills_flower" />
            </section>
        </div>
    )
}

export default Skills