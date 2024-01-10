import "./style.css";
import { FiLink } from "react-icons/fi";
import { useState } from "react";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";
import logo from "../../assets/Logo.png";

export default function Home(){
    const[link,setLink] = useState("");
    const[showModal,setShowModal] = useState(false);
    const [data,setData] = useState({});

    async function HandleShortLink(){
        try{
            const response = await api.post("/shorten",{
                long_url: link
            })
            setData(response.data);
            setShowModal(true);

            saveLink("@encurtaLink", response.data)

            setLink("");

        }catch(err){
            alert("Ops parece que algo deu errado");
            setLink("");
        }
    }

    /*if showmodal === true return linkitem

    {showModal &&(
              <LinkItem />  
            )}
    */

    return(
        <div className="container-home">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Gerador De Link</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>
            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF"/>
                    <input
                     type="text"
                     placeholder="Cole seu link aqui..."
                     value={link}
                     onChange={(e) => setLink(e.target.value)}
                      />
                </div>
                <button onClick={HandleShortLink}>Encurtar Link</button>
            </div>
            <Menu/>
            
            {showModal &&(
              <LinkItem 
              closeModal={() => setShowModal(false)}
              content={data}
              />  
            )}

            
        </div>
    )
}
