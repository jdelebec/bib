const axios = require('axios');
const cheerio = require('cheerio');

// total number of restaurants 
const firstPage_count = data => {
    const $ = cheerio.load(data);
    var nbOfRestau = $('body > div.col-md-3.annuaire_sidebar > form.form_facet > div.filters-wrapper > div.filters-inner > div.row > div.col-md-12 > div.bloc_filters > div.filter_content > ul > li').text();
    reg = /\d+/g;
    result = nbOfRestau.match(reg);
    nbOfRestau = parseInt(result[0])
    nbOfPages = nbOfRestau / 10;
    nbOfPages = Math.ceil(nbOfPages)
    return nbOfPages;
  }


  //as we see this site use method post, you cannot go on another page juste with the url
  module.exports.scrapeFirstSearchPage_count = async page_nb => {
    var string_nb = String(page_nb);
      const response = await axios({
        method: 'post',
        url: 'https://www.maitresrestaurateurs.fr/annuaire/ajax/loadresult#',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: 'page='+string_nb+'&sort=undefined&request_id=20c7c49652f88dff6c582475fc96d990&annuaire_mode=standard'
      });
      const {data, status} = response;
      if (status >= 200 && status < 300) {
        return firstPage_count(data);
      }
      console.error(status);
      return null;
  }