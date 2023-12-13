import { transacao, getEstoque } from "./estoque.js";

document.entrada.addEventListener('submit', leFormulario)

const olJoao = document.querySelector("#olJoao");
const olMaria = document.querySelector("#olMaria");

atualizaTela();

function leFormulario(event)
{
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`Solicitado: ${origem} doa ${quantidade} ${fruta} para ${destino}`);
    //document.entrada.submit();

    transacao(origem, destino, quantidade, fruta);
    atualizaTela();

    function atualizaTela()
    {
        const estoque = getEstoque();
        const joao = estoque['joao'];
        for(let i = 0; i < joao.length;i++){
            const monte = joao[i];
            const eLi = document.createElement('li');
            eLi.innerText = `${monte.tipo}: ${monte.qtd}`;
            olJoao.append(eLi);
        }
    }

    function atualizaTela()
    {
        const maria = estoque['maria'];
        for(let i = 0; i < maria.length;i++){
            const monte = maria[i];
            const eLi = document.createElement('li');
            eLi.innerText = `${monte.tipo}: ${monte.qtd}`;
            olMaria.append(eLi);
        }
    }
}