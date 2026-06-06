function OutraLista({itens}){
    console.log("olá")
    console.log(`quantidade de itens: ${itens.length}`)

    return(
        <>
            {
                (itens.length > 0) ? (
                    <>
                        <h1>Lista de Tecnologias</h1>
                        {itens.map((item) => (
                            <div key={item}>
                                <p>Nome: {item}</p>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>Não há itens na lista</p>
                )
            }
        </>
    )
}

export default OutraLista