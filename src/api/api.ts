// async function fetch_all_pages(url){
//     let vaiIndo = true
//     let result = []
//     let page = 1
//     while(vaiIndo) {
//         const response = await fetch(`${url}?page=${page}`)
//         const tempItems = await response.json()
//         if (tempItems.length > 0) {
//             result = result.concat(tempItems)
//             page++
//         } else {
//             break
//         }
//     }
//     return result
// }

export const api = {
    async searchHunted(vocacao: String, pagina: Number){
        const url = `https://dev.tibiadata.com/v4/highscores/Gentebra/experience/${vocacao}/${pagina}`
        const result = await fetch(url)
        const dados = await result.json()
        if (dados['highscores']) {
            const lista_highscore = dados['highscores']['highscores_list']
            return lista_highscore
        } else {
            return "Hunted não localizado"
        }
    }  
}