import { useState } from "react";

function Condicional(){

    const [email,setEmail] = useState() // armazena estado atual do email do usuario

    function enviarEmail(e){
        e.preventDefault() // impede recarregamente de página ao ler o dado
        console.log('testando')
    }

    function limparEmail(e){
        e.preventDefault() // impede recarregamente de página ao ler o dado
        setEmail('')
    }

    return (
        <div>
            <h2>Cadastre teu email:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite teu email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
                {/* if a la react */}
                {/* checa se o valor eh true simplesmente por ele estar ali */}
                {/* && -> entao executa o seguinte: */}
                {email && (
                    <div>
                        <p className="pEditado">O e-mail do usuário é: {email}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional 