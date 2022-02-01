import { FiLink } from "react-icons/fi";
import "./style.css";
export default function Home(){

    return(
        <div className="container-home">
            <div className="logo">
                <img src="/logo.png" alt="logo" />
                <h1>Gerador De Link</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>
            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF"/>
                    <input type="text" />
                </div>
                <button>Encurtar Link</button>
            </div>
        </div>
    )
}