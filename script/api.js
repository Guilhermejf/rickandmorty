let personagem = Math.floor(Math.random() * 826) + 1;
const url = `https://rickandmortyapi.com/api/character/${personagem}`
async function getApi(){
    const response = await fetch(url)
    if (response.status == 200){
        const dados = await response.json()
        insetDataHtml(dados)
    }
}