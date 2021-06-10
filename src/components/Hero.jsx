import React, { Component } from 'react';

class Hero extends Component {
    state = {}
    render() { 
        return (
            <React.Fragment>
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
                                        <li>SIŁA: 10 (+0)</li>
                                        <li>ZRĘCZNOŚĆ: 15 (+2)</li>
                                        <li>KONDYCJA: 14 (+2)</li>
                                        <li>INTELIGENCJA: 16 (+3)</li>
                                        <li>MĄDROŚĆ: 12 (+1)</li>
                                        <li>CHARYZMA: 8 (-1)</li>
                                    </ul>
                                </div>
                                <div className="content-hero-stats_section">
                                    <h3>Rzuty obronne:</h3>
                                    <ul>
                                        <li>Siła: +0</li>
                                        <li>Zręczność: +2</li>
                                        <li>Kondycja: +2</li>
                                        <li>Inteligencja: +5</li>
                                        <li>Mądrość: +3</li>
                                        <li>Charyzma: -1</li>
                                    </ul>
                                </div>
                                <div className="content-hero-stats_section">
                                    <h3>Umiejętności:</h3>
                                    <ul>
                                        <li>+2 Akrobatyka (Zrc)</li>
                                        <li>+0 Atletyka (Sił)</li>
                                        <li>+3 Historia (Int)</li>
                                        <li>+3 Intuicja (Mdr)</li>
                                        <li>+1 Medycyna (Mdr)</li>
                                        <li>+1 Opieka nad zwierzętami (Mdr)</li>
                                        <li>-1 Oszustwo (Cha)</li>
                                        <li>+3 Percepcja (Mdr)</li>
                                        <li>-1 Perswazja (Cha)</li>
                                        <li>+3 Przyroda (Int)</li>
                                        <li>+5 Religia (Int)</li>
                                        <li>+2 Skradanie się (Zrc)</li>
                                        <li>+1 Sztuka przetrwania (Mdr)</li>
                                        <li>+5 Śledztwo (Int)</li>
                                        <li>+5 Wiedza tajemna (Int)</li>
                                        <li>-1 Występy (Cha)</li>
                                        <li>-1 Zastraszanie (Cha)</li>
                                        <li>+2 Zwinne dłonie (Zrc)</li>
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
                            <p><img src="./images/minilogo.png" alt="Logo D&D" className="minilogo vis" /><b>Klasa postaci:</b><br />Czarownik</p>
                            <p><img src="./images/minilogo.png" alt="Logo D&D" className="minilogo vis" /><b>Pochodzenie:</b><br />Akolita</p>
                            <p><img src="./images/minilogo.png" alt="Logo D&D" className="minilogo vis" /><b>Rasa:</b><br />Elf wysoki</p>
                            <p><img src="./images/minilogo.png" alt="Logo D&D" className="minilogo vis" /><b>Charakter:</b><br />Chaotyczny dobry</p>
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
            </React.Fragment>
        );
    }
}
 
export default Hero;