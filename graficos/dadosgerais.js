const url = 'https://raw.githubusercontent.com/BIALINDAA/2024-API-ex/refs/heads/main/grafico';

async function vizualizarInformacoes() {
    const res = await fetch(url);
    const dados = await res.json();
    const pratoMaisVendido = dados.pratos[0].nome;
    const ingredientePrincipal = dados.pratos[0].ingrediente_popular;

    console.log(ingredientePrincipal);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = `Em busca de descobrir os pratos mais vendidos em 2023, foi feita uma série de pesquisas em diferentes fontes. Com o auxílio da IA do Google, foi possível estimar que o prato mais vendido foi <span>${pratoMaisVendido}</span> com um total de aproximadamente <span>${ingredientePrincipal}</span> nas plataformas de delivery.`;

    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

vizualizarInformacoes();
