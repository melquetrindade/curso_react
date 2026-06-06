function Saudacao({ nome }) {
    return (
        <>
            
            {nome ? (<p>Ola, {nome}!</p>) : null}

        </>
    )
}

export default Saudacao