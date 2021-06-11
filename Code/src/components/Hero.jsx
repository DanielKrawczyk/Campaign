import { useSelector } from 'react-redux';

function Hero() {
    const hero = useSelector(store => store.stats);
    
    const { stats, rolls, skills } = hero;

    return (
        <div id="hero">
            <div className="content">
                <h1>Ismena</h1>
                <div className="content-underline">
                        <div className="content-underline_line"></div>
                        <div className="content-underline_symbol">
                            <img src="./images/minilogo.png" alt="Logo D&D" />
                        </div>
                        <div className="content-underline_line"></div>
                </div>
                <div className="content-hero">
                    <div className="content-hero-img">
                        <img src="./images/character.jpg" alt="Obraz postaci" className="hero-img" />
                    </div>
                    <div className="content-hero-stats">
                        <div className="content-hero-stats_section">
                            <h3>Statystyki:</h3>
                            <ul>
                                <li>SIŁA: {stats.str}</li>
                                <li>ZRĘCZNOŚĆ: {stats.dex}</li>
                                <li>KONDYCJA: {stats.con}</li>
                                <li>INTELIGENCJA: {stats.int}</li>
                                <li>MĄDROŚĆ: {stats.wis}</li>
                                <li>CHARYZMA: {stats.cha}</li>
                            </ul>
                        </div>
                        <div className="content-hero-stats_section">
                            <h3>Rzuty obronne:</h3>
                            <ul>
                                <li>Siła: +{rolls.str}</li>
                                <li>Zręczność: +{rolls.dex}</li>
                                <li>Kondycja: +{rolls.con}</li>
                                <li>Inteligencja: +{rolls.int}</li>
                                <li>Mądrość: +{rolls.wis}</li>
                                <li>Charyzma: {rolls.cha}</li>
                            </ul>
                        </div>
                        <div className="content-hero-stats_section">
                            <h3>Umiejętności:</h3>
                            <ul>
                                <li>+{skills.acrobatic} Akrobatyka (Zrc)</li>
                                <li>+{skills.athletic} Atletyka (Sił)</li>
                                <li>+{skills.history} Historia (Int)</li>
                                <li>+{skills.intuition} Intuicja (Mdr)</li>
                                <li>+{skills.medicine} Medycyna (Mdr)</li>
                                <li>+{skills.animals} Opieka nad zwierzętami (Mdr)</li>
                                <li>{skills.deception} Oszustwo (Cha)</li>
                                <li>+{skills.perception} Percepcja (Mdr)</li>
                                <li>{skills.persuasion} Perswazja (Cha)</li>
                                <li>+{skills.nature} Przyroda (Int)</li>
                                <li>+{skills.religion} Religia (Int)</li>
                                <li>+{skills.stealth} Skradanie się (Zrc)</li>
                                <li>+{skills.survival} Sztuka przetrwania (Mdr)</li>
                                <li>+{skills.investigation} Śledztwo (Int)</li>
                                <li>+{skills.arcane} Wiedza tajemna (Int)</li>
                                <li>{skills.performance} Występy (Cha)</li>
                                <li>{skills.intimidation} Zastraszanie (Cha)</li>
                                <li>+{skills.robery} Zwinne dłonie (Zrc)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-underline">
                    <div className="content-underline_line"></div>
                    <div className="content-underline_symbol">
                        <img src="./images/minilogo.png" alt="Logo D&D" />
                    </div>
                    <div className="content-underline_line"></div>
                </div>
                <div className="content-info">
                    <div className="content-info_item">
                        <h4>Klasa postaci:</h4>
                        <h5>Czarownik</h5>
                    </div>
                    <div className="content-info_item">
                        <h4>Pochodzenie:</h4>
                        <h5>Akolita</h5>
                    </div>
                    <div className="content-info_item">
                        <h4>Rasa:</h4>
                        <h5>Elf wysoki</h5>
                    </div>
                    <div className="content-info_item">
                        <h4>Charakter:</h4>
                        <h5>Chaotyczny dobry</h5>
                    </div>
                </div>
                <div className="content-backstory">
                    <p>&emsp;Wiedziesz życie pełne oddania Oghmie, wszystkowidzącemu bogu wiedzy, całymi latami zgłębiając wiedzę Wieloświata. Podczas Twojego transu Oghma zesłał Ci wizję wyznaczając Ci zadanie do wykonania. Plemię goblinów zamieszkało w ruinach obecnie nazywanych Zamkiem Skałozębów. Niegdyś znajdował się tam poświęcony Oghmie ołtarz, lecz gobliny go splugawiły. Poświęcenie ołtarza gobliniemu bogu Maglubiyetowi stanowi dla Oghmy niedopuszczalną obrazę, która nie może być dłużej tolerowana. Masz pewność, że Oghma ma wobec Ciebie większe plany, jeśli tylko dasz radę wypełnić zadanie. W między czasie kolejna wizja podpowiada Ci, że w Mirabarze możesz liczyć na pomoc tamtejszych wyznawców Oghmy.
                    <br />
                    <br />
                    &emsp;Po drodze do Mirabar zamierzasz odwiedzić miasto portowe Luskan, w którym znajduje się Wieża Tajemnych Arkan. Zgromadzona tam wiedza bardzo Ci pomoże w Twoich badaniach.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;