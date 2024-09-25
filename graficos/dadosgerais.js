const url = 'https://raw.githubusercontent.com/BIALINDAA/2024-API-ex/refs/heads/main/grafico'

async function vizualizarInformaçoes() {
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados.titulo)
}
    
vizualizarInformaçoes()