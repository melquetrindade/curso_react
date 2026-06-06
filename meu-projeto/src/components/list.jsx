import Item from "./item";

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={1990} />
                <Item marca="Lamborghini" lancamento={1995} />
                <Item marca="Porsche" lancamento={2000} />
                <Item />
            </ul>
        </>
    )
}

export default List;