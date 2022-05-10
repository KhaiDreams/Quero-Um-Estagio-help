import { useState } from "react"
import axios from "axios"

import TemplateDefault from "../../templates/Default"

export default function RegisterUser() {
    //SAVING DATA FROM FORM
    const [values, setValues] = useState({})

    function handleChange(e) {
        setValues({ [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log(values)

        //axios.post("http://localhost:8080", values)
    }

    //AUTOCOMPLETING FROM ZIP
    const [address, setAddress] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    async function searchZIP(zip) {
        zip = zip.replace(/\D/g, "")
        const data = await fetch(`http://viacep.com.br/ws/${zip}/json/`)
            .then(data => data.json())
            .catch(data => data = "")
            
        let { logradouro="--", bairro="--", localidade="--", uf="--" } = data
        if(zip.length === 0) logradouro="", bairro="", localidade="", uf=""
        
        setAddress(logradouro)
        setNeighborhood(bairro)
        setCity(localidade)
        setState(uf)
    }
        
    return (
        <TemplateDefault>
            <main className="container">
                <h1>Cadastrar</h1>

                <form onSubmit={handleSubmit}>
                    <div className="inputbox">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" required onChange={handleChange} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="password">Senha</label>
                        <input type="text" id="password" required />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" required />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="cellphone">Celular</label>
                        <input type="text" id="cellphone" required />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="zip">CEP</label>
                        <input type="text" id="zip" required onBlur={e => searchZIP(e.target.value)} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="address">Endereço</label>
                        <input type="text" id="address" required defaultValue={address} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="number">Nº</label>
                        <input type="text" id="number" required />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="neighborhood">Bairro</label>
                        <input type="text" id="neighborhood" required defaultValue={neighborhood} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city" required defaultValue={city} />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="state">Estado</label>
                        <input type="text" id="state" required defaultValue={state} />
                    </div>

                    <button type="submit">Salvar</button>
                </form>
                
            </main>
        </TemplateDefault>
    )
}