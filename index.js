const RequestPromise = require('request-promise')
const cheerio = require('cheerio')

console.log(cheerio)

const url = 'https://www.imdb.com/title/tt0468569/?ref_=chttp_t_3';
(async ()=>{

    let response = await RequestPromise(url)

    let $ = cheerio.load(response)
    let title = $('h1[class="sc-afe43def-0 hnYaOZ"] > span').text()
    console.log(title)

})()