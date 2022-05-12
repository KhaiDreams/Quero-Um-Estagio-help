import { useState } from "react"
import axios from "axios"

import styles from "../../styles/users/register/register.module.css"

import TemplateDefault from "../../templates/Default"
import { handle } from "express/lib/router"

//obs: mds que sono vontade de morrer xande vc me paga
export default function Register() {
    //SAVING INPUTS
    const [values, setValues] = useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    //VALIDATING FORM
    const [validation, setValidation] = useState({
        emailValid: false, passwordValid: false, passwordsMatch: false
    })

    function handleInput() {
        handleEmail()
        handlePassword()
        handlePasswordsMatching()
    }

    function handleEmail() {
        const { email="" } = values
        const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)

        setValidation({ ...validation, emailValid: emailIsValid })
    }

    function handlePassword() {
        const { password="" } = values
        const passwordIsValid =
            (password.length >= 5 && /[A-Z]/.test(password) && /[@$!%*?&_-{}'"/~]/.test(password)) 
            ? true 
            : false

        setValidation({ ...validation, passwordValid: passwordIsValid })
    }

    function handlePasswordsMatching() {
        const { password="pw", password2="pw2" } = values
        const passwordsMatching = password === password2

        setValidation({ ...validation, passwordsMatch: passwordsMatching })
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

                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="inputbox">
                        <label htmlFor="name">Usuário</label>
                        <input type="text" id="name" required onChange={e => handleChange(e)} className={styles.colorfont} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" required onChange={e => handleChange(e)} onBlur={handleInput} className={styles.colorfont} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="password">Senha</label>
                        <input type="text" id="password" placeholder="Mínimo: 5 caracteres, 1 caractere especial e 1 letra maiúscula" required onChange={e => handleChange(e)} onBlur={handleInput} className={styles.colorfont} />
                        <button onClick={handleViewPassword}>VER</button> {/* colocar ícone do olhinho */}
                    </div>
                    <div className="inputbox">
                        <label htmlFor="password2">Senha</label>
                        <input type="text" id="password2" placeholder="Repita a senha" required onChange={e => handleChange(e)} onBlur={handleInput} className={styles.colorfont} />
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>
                
            </main>
        </TemplateDefault>
    )
}