const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */


 //to get all link on a single page
const search_link_rest = data => {
  const $ = cheerio.load(data);
  var link = [];
  $("a.link").each(function( index ) { 
    link.push($(this).attr("href"));
  });
  return link;
}

/**
 * Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */

module.exports.scrapeRestaurant_link = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return search_link_rest(data);
  }

  console.error(status);
  return null;
};

//scrap resume in restaurant page
const rest_resume = data => {
  const $ = cheerio.load(data);

  var name = $('.section-main h2.restaurant-details__heading--title').text();
  name = name.toLocaleLowerCase();
  name = name.replace('�',"o").replace('ô','o').replace(/\s/g,"").replace('-',"").replace('-',"").replace('\'',"").replace('ö','o').replace('ù','u').replace('û','u').replace('ü','u').replace("î","i").replace("ï","i").replace("à","a").replace("â","a").replace("ä","a").replace("é","e").replace("è","e").replace("ê","e").replace("ë","e").replace("ç","c");
  
  var phone = $('span.flex-fill').first().text();
  var address = $('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section.section.section-main.restaurant-details__main > div.restaurant-details__heading.d-none.d-lg-block > ul > li:nth-child(1)').text().trim();
  return { name, phone, city, address};
};


module.exports.scrapeRestaurant_resume = async url => {
  const response = await axios(url);
  const { data, status } = response;
  if (status >= 200 && status < 300) {
    return rest_resume(data);
  }
  console.error(status);
  return null;
};


//Use as example
module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};


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

module.exports.scrapFirstPage = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return firstPage_count(data);
  }

  console.error(status);

  return null;
};





/**
 * Get all France located Bib Gourmand restaurants
 * @return {Array} restaurants
 */
module.exports.get = () => {
  return [];
};

const parse = data => {
  const $ = cheerio.load(data);
  const name = $('h2.restaurant-details__heading--title').text();
  const adresse = $('.section-main ul.restaurant-details__heading--list > li:nth-child(1)').text();
  const experience = $('#experience-section > ul > li:nth-child(2)').text();
  const price = $('.section-main ul.restaurant-details__heading--list > li:nth-child(2)').text();
  const spe = $('.section-main div.restaurant-details__text-componets--text ').text();
  const test = $('h1').text();
  //name, adresse, price, experience,spe,
  var tab = [];
  $("a.link").each(function( index ) { 
    console.log(index + ": " + $(this).attr("href"));
    tab.push($(this).attr("href"));
  });
  return tab;
};
