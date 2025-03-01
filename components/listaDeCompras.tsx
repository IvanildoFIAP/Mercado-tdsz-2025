// Importando o tipo de item
import { Item } from '../data/listaData';

// Definimos o formato da interface de props, com o componente listaDeCompras
// Lista de itens (array de Item)
type listaDeComprasProps = {
    itens: Item[]; // Iens será um array do objeto do tipo 'Item'
}

function listaDeCompras(props: listaDeComprasProps) {
    return (
        <>{
            /*
            Aqui, estamos usando props.itens para acessar o array de itens que foi passado para o componente.
            Para cada item, exibimos o nome e quanidade 'props' - nos permite "injetar" dados no componente.
            Conceito de props: "propriedades" enviadas de um componente pai para o componente filho
            */
        }
            <h2>Lista de Compras</h2>
            {props.itens.map(function (item) {
                return (
                    <div key={item.id}>
                        <p>Produto: {item.nome}</p>
                        <p>Quantidade: {item.quantidade}</p>
                        <hr />
                    </div>
                );
            })};
        </>
    )
};
// dusjui

export default listaDeCompras;