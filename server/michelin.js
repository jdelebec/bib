const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */

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

module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
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
