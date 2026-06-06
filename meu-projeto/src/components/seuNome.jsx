function SeuNome({setNome}) {
    return(
        <div>
            <p>Digite seu nome:</p>
            <form>
                <input 
                type="text" 
                placeholder="Digite seu nome" 
                onChange={(e) => setNome(e.target.value)} />
            </form>
        </div>
    )
}

export default SeuNome