async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/BIALINDAA/2024-API-ex/refs/heads/main/pizza'
    const res = await fetch(url)
    const dados = await res.json()

    for(let i = 0; i <= dados.length; i++) {
        
        console.log(Object.values(dados[i].nome))

    }
    console.log(dados[0].nome)
    
}