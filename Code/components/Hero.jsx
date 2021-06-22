import { useSelector } from 'react-redux';
import Underline from './Underline';
import Separate from './Separate';

function Hero() {
    const hero = useSelector(store => store.stats);
    const { stats, rolls, skills, backstory, name, character, hero_class, origin, race } = hero;
    
    return (
        <div id="hero">
            <div className="content">
                <h1>{name}</h1>
                <Underline />
                <div className="content-hero">
                    <div className="content-hero-img">
                        <img src="./images/character.jpg" alt="Obraz postaci" className="hero-img" />
                    </div>
                    <div className="content-hero-stats">
                        <div className="content-hero-stats_section">
                            <h3>Statystyki:</h3>
                            {stats.map(m => 
                                <abbr key={m.name} title={m.descr}>{m.name}: {m.value}</abbr>
                            )}
                        </div>
                        <div className="content-hero-stats_section">
                            <h3>Rzuty obronne:</h3>
                            {rolls.map(m => 
                                <abbr key={m.name} title={m.descr}>{m.name}: {m.value >= 0 ? "+":""}{m.value}</abbr>    
                            )}
                        </div>
                        <div className="content-hero-stats_section">
                            <h3>Umiejętności:</h3>
                            {skills.map(m => 
                                <abbr key={m.name} title={m.descr}>{m.name}: {m.value >= 0 ? "+":""}{m.value}</abbr>    
                            )}
                        </div>
                    </div>
                </div>
                <Separate />
                <div className="content-info">
                    <div className="content-info_item">
                        <h4>Klasa postaci:</h4>
                        <h5><abbr title={hero_class.descr}>{hero_class.name}</abbr></h5>
                    </div>
                    <div className="content-info_item">
                        <h4>Pochodzenie:</h4>
                        <h5><abbr title={origin.descr}>{origin.name}</abbr></h5>
                    </div>
                    <div className="content-info_item">
                        <h4>Rasa:</h4>
                        <h5><abbr title={race.descr}>{race.name}</abbr></h5>
                    </div>
                    <div className="content-info_item">
                        <h4>Charakter:</h4>
                        <h5><abbr title={character.descr}>{character.name}</abbr></h5>
                    </div>
                </div>
                <Separate />
                <div className="content-backstory">
                    <p>&emsp;{backstory}</p>
                </div>
                <Separate />
            </div>
        </div>
    );
}
 
export default Hero;