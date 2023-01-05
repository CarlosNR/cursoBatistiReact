import {useState} from 'react'
function Form(){

    function cadastrarUsuario(e){
        //e evita que o submit de reload na pg 
        e.preventDefault()
        console.log(`${name} se cadastrou`)
        console.log(`${password} é a senha passada para o backend`)
        //logs de exemplo, na pratica seria o Post pro backend
           
    }

    //[resgata valor, atribui valor]
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="Digite seu name"
                        // pra cada letra digitada, altera o valor
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form