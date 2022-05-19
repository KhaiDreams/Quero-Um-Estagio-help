import { useState, useEffect } from "react"
import axios from "axios"

import TemplateDefault from "../../templates/Default"

import styles from "../../styles/users/register/register.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"

//obs: mds que sono vontade de morrer xande vc me paga
export default function Register() {
    //SAVING INPUTS
    const [values, setValues] = useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    //VALIDATING FORM
    const [validation, setValidation] = useState({ validPassword: false, passwordsMatch: false })

    useEffect(() => {
        handlePassword()
        handlePassword2()
    }, [values])

    function handlePassword() {
        const { password="" } = values
        const passwordIsValid = (
            password.length >= 5 &&
            /['-="!@#$%¨&*()_+]/.test(password) &&
            /[A-Z]/.test(password)
        )

        setValidation(prevState => ({ 
            ...prevState,
            validPassword: passwordIsValid
        }))
    }
    function handlePassword2() {
        const { password, password2 } = values
        const validPassword2 = password === password2

        setValidation(prevState => ({ 
            ...prevState,
            passwordsMatch: validPassword2
        }))
    }

    //SUBMITING
    function handleSubmit(e) {
        e.preventDefault()

        for(let check in validation){
            if(!validation[check]){
                switch(check){
                    case "validPassword":
                        alert("Insira uma senha válida!")
                        break
                    case "passwordsMatch":
                        alert("As senhas devem coincidir!")
                        break
                }
                return
            }
        }

        delete values.password2
        axios.post("http://localhost:8080", values)
        .then(res => console.log(res.data))
        .catch(res => console.log(res))
    }

    //TRIGGER PASSWORD VIEWING
    const [passwordInputType, setPasswordInputType] = useState("password")

    function handleViewPassword() {
        passwordInputType === "password" 
            ? setPasswordInputType("text")
            : setPasswordInputType("password")
    }s
        
    return (
        <TemplateDefault>
            <main className={styles.container}>
                <div className={styles.overlay}>
                    <h1>Cadastrar</h1>
                    <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}> 
                        <input type="text" id="name" required placeholder="Nome" onChange={e => handleChange(e)} className={styles.input} />
                        <input type="email" id="email" required placeholder="E-mail" onChange={e => handleChange(e)} className={styles.input} />
                        <input type={passwordInputType} id="password" placeholder="Senha" required onChange={e => handleChange(e)} className={styles.input} />
                        <button type="button" onClick={handleViewPassword} className={styles.btnViewPassword}>
                            {
                                passwordInputType === "text"
                                ? <FontAwesomeIcon icon={faEye} className={styles.btnView} />
                                : <FontAwesomeIcon icon={faEyeSlash} className={styles.btnView} />
                            }
                        </button>
                        <span className={styles.passwordFooter}>
                            Mínimo: 5 caracteres, 1 caractere especial e 1 letra maiúscula
                        </span>
                        <input type={passwordInputType} id="password2" placeholder="Repita a senha" required onChange={e => handleChange(e)} className={styles.input} />                        
                        <button className={styles.btnRegister}>Cadastrar</button>
                    </form>
                </div>  
            </main>
        </TemplateDefault>
    )
}