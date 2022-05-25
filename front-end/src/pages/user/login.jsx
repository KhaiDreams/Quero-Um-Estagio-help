import axios from "axios"
import { useState, useEffect } from "react"

import TemplateDefault from "../../templates/Default"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faEye, 
    faEyeSlash
} from "@fortawesome/free-regular-svg-icons"

//obs: mds que sono vontade de morrer xande vc me paga
export default function Login() {
    //SAVING INPUTS
    const [values, setValues] = useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    //SUBMITING
    function handleSubmit(e) {
        e.preventDefault()

        axios.get("http://localhost:8080", values)
            .then(res => console.log(res.data))
            .catch(res => console.log(res))
    }

    //TRIGGER PASSWORD VIEWING
    const [passwordInputType, setPasswordInputType] = useState("password")

    function handleViewPassword() {
        passwordInputType === "password" 
            ? setPasswordInputType("text")
            : setPasswordInputType("password")
    }

    return (
        <TemplateDefault>
            <main>
                <div>
                    <h1>Login</h1>

                    <div>
                        <form autoComplete="off" onSubmit={handleSubmit}> 
                            <div>
                                <input type="text" id="user" required placeholder="Usuário" onChange={e => handleChange(e)} />
                            </div>

                            <div>
                                <input type="password" id="password" required placeholder="Senha" onChange={e => handleChange(e)} />
                                <button type="button" onClick={handleViewPassword}>
                                        {
                                            passwordInputType === "text"
                                            ? <FontAwesomeIcon icon={faEye} />
                                            : <FontAwesomeIcon icon={faEyeSlash} />
                                        }
                                </button>
                            </div>
                            
                            <div>
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </div>  
            </main>
        </TemplateDefault>
    )
}