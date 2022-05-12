import { useState } from "react"
import axios from "axios"

import TemplateDefault from "../../templates/Default"

//obs: mds que sono vontade de morrer xande vc me paga
export default function Register() {
    //SAVING INPUTS
    const [values, setValues] = useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    //VALIDATING FORM
    const validation = {
        emailValid: false,
        passwordValid: false, 
        passwordsMatch: false,
    }

    function handleEmail() {
        const { email="" } = values

        const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)

        emailIsValid
            ? validation.emailValid = true
            : validation.emailValid = false
    }

    function handlePassword() {
        const { password="pw" } = values
        
        if(
            password.length >= 5 && 
            /[A-Z]/.test(password) && 
            /[@$!%*?&_-{}'"/~]/.test(password)
        ) validation.passwordValid = true
        else validation.passwordValid = false
    }

    function handlePassword2() {
        const { password="pw", password2="pw2" } = values

        if(password === password2) validation.passwordsMatch = true
        else validation.passwordsMatch = false
    }

    //SUBMITING
    function handleSubmit(e) {
        e.preventDefault()

        for(let check in validation){
            if(validation[check] === false){
                if(check === "emailValid") alert("Insira um email válido!")
                if(check === "passwordValid") alert("Insira uma senha válida! (ao menos 5 caracteres, 1 caractere especial e uma letra maiúscula)")
                if(check === "passwordsMatch") alert("As senhas não são iguais!")
                return
            }
        }

        alert("Form enviado!")
        // delete values.password2
        // axios.post("http://localhost:8080", values)
        // .then(res => console.log(res.data))
        // .catch(res => console.log(res)) 
    }

    //TRIGGER PASSWORD VIEWING
    function handleViewPassword() {
        alert("View password changed")
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
                        <input type="text" id="email" required onChange={e => handleChange(e)} onBlur={handleEmail} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="password">Senha</label>
                        <input type="text" id="password" placeholder="Mínimo: 5 caracteres, 1 caractere especial e 1 letra maiúscula" autoComplete="off" required onChange={e => handleChange(e)} onBlur={handlePassword} />
                        <button onClick={handleViewPassword}>VER</button> {/* colocar ícone do olhinho */}
                    </div>
                    <div className="inputbox">
                        <label htmlFor="password2">Senha</label>
                        <input type="text" id="password2" placeholder="Repita a senha" required onChange={e => handleChange(e)} onBlur={handlePassword2} />
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>
                
            </main>
        </TemplateDefault>
    )
}