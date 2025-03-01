// Definir itens e conteudo

// Definir type
export type Item = {
    id: number; // identificador unico de produto
    nome: string; //nome do produto
    quantidade: number; // quantidade
};

// Array com a lista de compra, contendo vários produtos
export const listaData: Item[] = [
    { id: 1, nome: 'Arroz', quantidade: 2 },
    { id: 2, nome: 'Feijão', quantidade: 4 },
    { id: 3, nome: 'Batata', quantidade: 5 },
    { id: 4, nome: 'Macarrão', quantidade: 7 },
    { id: 5, nome: 'Maça', quantidade: 10 },
];

export const listaFrutas: Item[] = [
    { id: 1, nome: 'Banana', quantidade: 2 },
    { id: 2, nome: 'Pera', quantidade: 4 },
    { id: 3, nome: 'Uva', quantidade: 5 },
];