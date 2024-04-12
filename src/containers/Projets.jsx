import "../index.scss"

import Card from "../components/Card"
import Projets from "../projets.json"

function SectionProjets() {
    
    return (
        <div className='projets_wrapper' id="about">
            <h2 className="projets_title">Projets</h2>
            <section className="projetsCards_wrapper">
                {Projets.map((projet) => (
                    <Card
                        key={ projet.picture }
                        picture={ projet.picture }
                        description={ projet.description }
                        text={ projet.text }
                        outils={ projet.outils }
                        GithubLink={ projet.githubLink }
                        WebLink={ projet.webLink }
                    />
                ))}
            </section>
        </div>
    )
}

export default SectionProjets