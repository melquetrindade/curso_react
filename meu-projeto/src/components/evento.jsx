import Button from "./button";

function Evento(){
    const meuEvento = () => {
        console.log('Primeiro Evento disparado!')
    }

    const segundoEvento = () => {
        console.log('Segundo Evento disparado!')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}

export default Evento;
