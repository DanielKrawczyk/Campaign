import bard from '../audio/bard';

function Underline() {
    return (
        <div className="underline">
            <div className="underline_dragon mirror">
                <img src="./images/dragon.png" alt="Ikona smoka" />
            </div>
            <div className="underline_line"></div>
            <div className="underline_symbol">
                <img src="./images/minilogo.png" onClick={() => bard.dragon.play()} alt="Logo D&D" />
            </div>
            <div className="underline_line"></div>
            <div className="underline_dragon">
                <img src="./images/dragon.png" alt="Ikona smoka" />
            </div>
        </div>
    )
}

export default Underline;