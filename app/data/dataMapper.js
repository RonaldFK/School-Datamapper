const client = require('./dataOclock.js')

const dataMapper = {
  async displayPromos () {
    let promoResult
    const findPromo = 'SELECT * FROM promo;'
    const result = await client.query(findPromo)
    try {
      promoResult = result.rows
    } catch (err) {
      console.log(err.stack)
    }
    return promoResult
  },
  async findStudents (promo) {
    let result
    const students = `SELECT * FROM students WHERE promo=${promo};`
    try {
      result = await client.query(students)
    } catch (err) {
      console.log(err.stack)
    }
    return result
  }
}

module.exports = dataMapper
