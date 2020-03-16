/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
async function sandbox (searchLink) {
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);   
    const restaurant = await michelin.scrapeRestaurant(searchLink);
    console.log(restaurant);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}


const [,, searchLink] = process.argv;

for (let pas = 1; pas < 2; pas++) {
  nb_page = parseInt(pas);
  sandbox('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/' + nb_page);
}

