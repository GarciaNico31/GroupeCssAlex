// Stylesheet
import "./Header.css";

// Assets
import DisneyLogo from "../assets/Global/DisneylandParisLogo.png";

const Header = () => {
    return (
        <div className="HeaderGlobal">
            <button className="HeaderPrec">Précedent</button>
            <img className="ImgHeader" src={DisneyLogo} alt="disneylogo"/>
            <button className="HeaderNext">Suivant</button>
        </div>
    )
}

export default Header;
