const client = require('./dataOclock.js')

const dataMapper = {
    displayPromos(){
        const promos = 'SELECT * FROM promo;';
        client
                .query(promos)
                .then(result => {
                    res.locals.promoResult = result.rows;
                    res.render('index');
                })
                .catch(err => console.log(err.stack));
    }
}

module.exports = dataMapper;