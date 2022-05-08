import { useState } from "react"
import TemplateDefault from "../../templates/Default"

export default function Cep() {
    const [address, setAddress] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    const searchZIP = async(zip) => {
        zip = zip.replace(/\D/g, "")
        const data = await fetch(`http://viacep.com.br/ws/${zip}/json/`)
            .then(data => data.json())
            .catch(data => data = "")
            
        const { logradouro="--", bairro="--", localidade="--", uf="--" } = data

        setAddress(logradouro)
        setNeighborhood(bairro)
        setCity(localidade)
        setState(uf)
    }

    return (
        <TemplateDefault>
            <main className="container">
                <h1>Cadastrar</h1>

                <form onSubmit={() => alert("Submited!")}>
                    <div className="inputbox">
                        <input type="text" id="name" required />
                        <label for="name">Nome</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="password" required />
                        <label for="email">E-mail</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="email" required />
                        <label for="password">Senha</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="zip" required onBlur={(e) => searchZIP(e.target.value)} />
                        <label for="zip">CEP</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="address" required defaultValue={address} />
                        <label for="address">Endereço</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="number" required />
                        <label for="number">Nº</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="neighborhood" required defaultValue={neighborhood} />
                        <label for="neighborhood">Bairro</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="city" required defaultValue={city} />
                        <label for="city">Cidade</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="state" required defaultValue={state} />
                        <label for="state">Estado</label>
                    </div>
                </form>
                
                <button type="submit">Salvar</button>
            </main>
        </TemplateDefault>
    )
}