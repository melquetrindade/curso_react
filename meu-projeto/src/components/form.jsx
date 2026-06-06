import { useState } from 'react'

function Form(){
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const cadastrarUsuario = (e) => {
        e.preventDefault()
        console.log(`Cadastrou o usuário: ${nome} - ${senha}`)
    }

    return(
        <div>
            <h1>Meu Formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                    type="text" 
                    id="nome" 
                    placeholder="Digite seu nome"
                    onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                    type="password" 
                    id="senha" 
                    placeholder="Digite sua senha"
                    onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar!"/>
                </div>
            </form>
        </div>
    )
}

export default Form