let estoque = {

    'joao': [ { 'tipo':'maca', 'quantidade': 1 }],
    'maria': [ { 'tipo': 'maca', 'quantidade': 2 }],

};

export function getEstoque()
{
    return structuredClone(estoque);
}

export function transacaoNoEstoque(Origem, Destino, fruta, quantidade) {

    if (Origem === "pomar" ) {
        dePomarParaPessoa(Destino, quantidade, fruta);
    }

    if (Destino === "pomar") {
        dePomarParaPomar(Origem, quantidade, fruta);
    }

    if ((Destino === "joao" && Origem === 'maria')) {
        dePessoaParaPessoa(Origem, Destino, quantidade, fruta);
    }
    if ((Destino === "maria" && Origem === 'joao')) {
        dePessoaParaPessoa(Origem, Destino, quantidade, fruta);
    }
}

function dePomarParaPessoa(destino, quantidade, fruta){
    const pessoa = estoque[destino];
    let monte;
    for(let i = 0; i < pessoa.length; i++) {
    if(pessoa[i].tipo === fruta){
        monte = pessoa[i];
        break;
        }
    }
    if(!monte){
        monte = {tipo: fruta, quantidade: 0};
        pessoa.push(monte);
    }
    monte.quantidade += quantidade;
    monte.tipo = fruta;
    return;
}

function dePomarParaPomar(origem, quantidade, fruta) {
    const pessoa = estoque[origem];
    let monte;
    for(let i = 0; i < pessoa.length; i++) {
        if(pessoa[i].tipo === fruta){
            monte = pessoa[i];
            break;
            }
        }
    if(!monte){
        return;
    }
    monte.quantidade -= Math.min(quantidade, monte.quantidade);
}

function dePessoaParaPessoa(origem, destino, quantidade, fruta) {
    const da = estoque[origem];
    const recebe = estoque[destino];
    let monteD;
    let monteR;
    
    for (let i = 0; i < da.length; i++) {
        if (da[i].tipo === fruta) {
            monteD = da[i];
            break;
        }
    }
    for (let i = 0; i < recebe.length; i++) {
        if (recebe[i].tipo === fruta) {
            monteR = recebe[i];
            break;
        }
    }
    if (!monteD) {
        monteD = { tipo: fruta, quantidade: 0 };
        da.push(monteD);
    }

    if (!monteR) {
        monteR = { tipo: fruta, quantidade: 0 };
        recebe.push(monteR);
    }
    
    let quantidadeEnviada = Math.min(quantidade, monteD.quantidade);
    monteD.quantidade -= quantidadeEnviada;
    monteR.quantidade += quantidadeEnviada;
}
