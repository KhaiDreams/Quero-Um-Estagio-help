import axios from "axios"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "react-scroll/modules/components/Link"

import TemplateDefault from "../../templates/Default"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import styles from "../../styles/users/login/login.module.css"


//obs: mds que sono vontade de morrer xande vc me paga
export default function Login() {
    //SAVING INPUTS
    const [values, setValues] = useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    //TRIGGER PASSWORD VIEWING
    const [passwordInputType, setPasswordInputType] = useState("password")

    function handleViewPassword() {
        passwordInputType === "password" 
            ? setPasswordInputType("text")
            : setPasswordInputType("password")
    }

    //SUBMITING
    async function handleSubmit(e) {
        e.preventDefault()

        const res = await axios.get("http://localhost:8080", values)
            .then(res => res.data)
            .catch(err => console.error(err))
        
        setLogged(res)
    }

    //LOGIN
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        const router = useRouter()

        logged ? router.redirect("/") : "AVISO DE LOGIN INVÁLIDO"
    }, [logged])

    return (
        <TemplateDefault>
            <main className={styles.container}>
                <div className={styles.overlay}>
                    <h1 className={styles.login}>LOGIN</h1>

                    <div className={styles.formDiv}>
                        <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}> 
                            <div className={styles.inputBox}>
                                <input className={styles.input} type="text" id="user" required placeholder="Email ou Usuário" onChange={e => handleChange(e)} />
                            </div>

                            <div className={styles.inputBox}>
                                <input className={styles.input} type="password" id="password" required placeholder="Senha" onChange={e => handleChange(e)} />
                                <button className={`${styles.btnViewPassword} ${styles.icon}`} type="button" onClick={handleViewPassword}>
                                        {
                                            passwordInputType === "text"
                                            ? <FontAwesomeIcon icon={faEye} />
                                            : <FontAwesomeIcon icon={faEyeSlash} />
                                        }
                                </button>
                            </div>

                            <div className={styles.doesNotContainDiv}>
                                <Link className={styles.doesNotContain} href="user/register">Ainda não registrado?</Link>
                            </div>
                            
                            <div className={styles.buttonDiv}>
                                <button className={styles.btnRegister}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>  
            </main>
        </TemplateDefault>
    )
}