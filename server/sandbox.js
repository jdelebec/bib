/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');

url_bib_gourmand = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/';


async function sandbox (searchLink = url_bib_gourmand ) {
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);   

    //get all url from all restaurant website
    var links_bib_gourmand = [];
    for(var i = 1; i <= 2; i++){
      console.log(i);
      const link = await michelin.scrapeRestaurant_link('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/' + String(i));
      console.log(link);
      link.forEach(element => links_bib_gourmand.push('https://guide.michelin.com' + element));
    }


    console.log(links_bib_gourmand[0]);
    process.exit(0);



  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}


const [,, searchLink] = process.argv;
sandbox(searchLink);

/*for (let pas = 1; pas < 2; pas++) {
  nb_page = parseInt(pas);
  sandbox('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/' + nb_page);
}
*/
