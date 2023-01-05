const client = require('../data/dataOclock.js')
const dataMapper = require('../data/dataMapper.js')

const mainController = {
  // Afficher l'ensemble de mes promos
  async displayPromos (req, res) {
    res.locals.promoResult = await dataMapper.displayPromos()
    try {
      res.render('index')
    } catch (error) {
      console.log(error.stack)
    }
  },
  // Je récupère la liste des students de la promo en cours de visualisation
  async displayStudents (req, res) {
    const students = await dataMapper.findStudents(req.params.promo)
    console.log(students)
    try {
      res.locals.studentsResult = students.rows
      res.render('students')
    } catch (error) {
      console.log(error.stack)
    }
  },
  // Gestion de la recherche d'une promo
  async displaySearch (req, res) {
    const promoSearched = req.query.promoSearched
    const promoSearchedResult = `SELECT * FROM students WHERE promo=${promoSearched};`
    if (promoSearched) {
      const result = await client.query(promoSearchedResult)
      // Gestion des erreurs
      try {
        if (result.rowCount == 0) {
          res.render('404')
        }
        res.locals.studentsResult = result.rows
        res.render('students')
        console.log(result.rowCount)
      } catch (error) {
        console.log(error.stack)
        res.render('404')
      }
    }
  },
  // Gestion insertion d'un nouvel élève
  async InsertData (req, res) {
    console.log(req.body.prenom)
    const dataToInsert = `INSERT INTO students (first_name,last_name,promo) VALUES ('${req.body.prenom}','${req.body.nom}',${req.body.promo});`
    await client.query(dataToInsert)
    try {
      res.redirect(`/search?promoSearched=${req.query.promoSearched}`)
    } catch (error) {
      console.log(error.stack)
    }
  }
}

module.exports = mainController
