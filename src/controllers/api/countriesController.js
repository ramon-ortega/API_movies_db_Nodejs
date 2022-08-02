const fetch = require('node-fetch');

const countriesController = {
    list: async (req, res)=>{
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();

        res.render('countries', {countries});
    }
}

module.exports = countriesController;