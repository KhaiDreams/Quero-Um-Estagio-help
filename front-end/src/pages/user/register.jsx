import { useState } from "react"
import axios from "axios"

import TemplateDefault from "../../templates/Default"

export default function Register() {
    //SAVING DATA FROM FORM
    const [values, setValues] = useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    //PASSWORDS HANDLING
    function handlePassword() {
        const { password="pw" } = values
        setValidated(password.length >= 5 || (/[A-Z\W]/g).test(password)) 
    }

    function handlePassword2() {
        const { password="pw", password2="pw2" } = values
        setValidated(password === password2) 
    }

    function handleViewPassword() {
        alert("View password changed")
    }

    //VALIDATING FORM
    const [validated, setValidated] = useState(false)

    //SUBMITING
    function handleSubmit(e) {
        e.preventDefault()

        if(validated){
            delete values.password2
            console.log(values)

            alert("Form enviado!")
            // axios.post("http://localhost:8080", values)
            // .then(res => console.log(res.data))
            // .catch(res => console.log(res))
        }
        else alert("Preencha os campos corretamente!")
    }
        
    return (
        <TemplateDefault>
            <main className="container">
                <h1>Cadastrar</h1>

                <form onSubmit={handleSubmit}>
                    <div className="inputbox">
                        <label htmlFor="name">Usuário</label>
                        <input type="text" id="name" required onChange={e => handleChange(e)} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" required onChange={e => handleChange(e)} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="password">Senha</label>
                        <input type="text" id="password" placeholder="Mínimo: 5 caracteres, 1 caractere especial e 1 letra maiúscula" required onChange={e => handleChange(e)} onBlur={handlePassword} />
                        <button onClick={handleViewPassword}>VER</button> {/* colocar ícone do olhinho */}
                    </div>
                    <div className="inputbox">
                        <label htmlFor="password2">Senha</label>
                        <input type="text" id="password2" placeholder="Repita a senha" required onChange={e => handleChange(e)} onBlur={handlePassword2} />
                        <button onClick={handleViewPassword}>VER</button> {/* colocar ícone do olhinho */}
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>
                
            </main>
        </TemplateDefault>
    )
}