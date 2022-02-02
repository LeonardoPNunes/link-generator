import "./style.css";

import { BsLinkedin, BsGithub} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://www.linkedin.com/in/leonardo-paulo-nunes-de-freitas/">
                <BsLinkedin size={24} color="#FFF"/>
            </a>
            <a className="social" href="https://github.com/LeonardoPNunes">
                <BsGithub size={24} color="#FFF"/>
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}