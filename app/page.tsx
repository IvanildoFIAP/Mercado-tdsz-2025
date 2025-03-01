import ListaDeCompras from "@/components/listaDeCompras";
import '../app/globals.css';
import { listaData, listaFrutas } from "../data/listaData";

function page() {
  return (
    <>
      <h1>MERCADO</h1>
      <p>Lista de itens Gerais</p>
      <ListaDeCompras itens={listaData} />
      <p>Lista de itens Gerais</p>
      <ListaDeCompras itens={listaFrutas} />
    </>
  )
};

export default page;