const client = require('./dataOclock.js')

const dataMapper = {
    async displayPromos() {
        let promoResult;
        const findPromo = 'SELECT * FROM promo;';
        const result = await client.query(findPromo)
        try { promoResult = result.rows;}
            
            catch(err) {console.log(err.stack)}
        return promoResult       
    }
}

module.exports = dataMapper;