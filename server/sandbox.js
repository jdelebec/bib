/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');

url_bib_gourmand = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/';

var fs = require('fs');

async function sandbox (searchLink = url_bib_gourmand ) {
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);   

    //get all url from all restaurant website
    var links_bib_gourmand = [];
    for(var i = 1; i <= 15; i++){
      console.log("page :" + i);
      const link = await michelin.scrapeRestaurant_link('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/' + String(i));
      //console.log(link);
      link.forEach(element => links_bib_gourmand.push('https://guide.michelin.com' + element));
    }

    var list_rest_resume = [];  
    for(var i = 0; i < links_bib_gourmand.length; i++){
      console.log(i);
      var restaurant = await michelin.scrapeRestaurant_resume(links_bib_gourmand[i]);
      restaurant = {name: restaurant.name, phone: restaurant.phone, address: restaurant.address, link: links_bib_gourmand[i]}
      console.log(restaurant);
      list_rest_resume.push(restaurant);
    }

    var fs = require('fs');
    fs.writeFileSync('../memory/src/list_rest.json', JSON.stringify(list_rest_resume, null, 4), (err) => {
      if (err) {
        console.error(err);
        return;
      };
      console.log("File has been created");
    });

    console.log("done");
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
