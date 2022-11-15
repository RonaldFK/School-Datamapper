const client = require('../data/dataOclock.js')

const mainController = {

     async displayPromos(req,res){
        const findPromo = 'SELECT * FROM promo;';
        const result = await client.query(findPromo)
        try { res.locals.promoResult = result.rows;
            res.render('index');}          
        catch(err) {console.log(err.stack)};
                },
     async displayStudents(req,res){
        // Je récupère la liste des students de la promo en cours de visualisation
        const students = `SELECT * FROM students WHERE promo=${req.params.promo};`;
        const result = await client.query(students)
        try {res.locals.studentsResult = result.rows;
            res.render('students');
        }
        catch (error) {console.log(error.stack)}
     },
     displaySearch(req,res){
        // Gestion de la recherche de la promo
        const promoSearched = req.query.promoSearched;

        console.log(promoSearched);
        const promoSearchedResult = `SELECT * FROM students WHERE promo=${promoSearched};`;
        if (promoSearched) {
            client
            .query(promoSearchedResult)
            .then(result => {
                // controle de l'existance de la promo, sinon 404 error
                if (result.rowCount == 0) {
                    res.render('404')
                }
                res.locals.studentsResult = result.rows;
                res.render('students');
                console.log(result.rowCount);
            })
            .catch(err => console.log(err.stack));
        } else {
            res.render('404')
        }
        
    },
    InsertData(req,res){
console.log(req.body.prenom)
const promoSearched = req.query.promoSearched;
const dataToInsert = `INSERT INTO students (first_name,last_name,promo) VALUES ('${req.body.prenom}','${req.body.nom}',${req.body.promo});`;
client
.query(dataToInsert)
.then(result => {

    console.log(result.rowCount);
        res.redirect('/promo/:promo')
})
.catch(err => console.log(err.stack))

        //console.log(promoSearched);
        // const promoSearchedResult = `SELECT * FROM students WHERE promo=${promoSearched};`;
        // if (promoSearched) {
        //     client
        //     .query(promoSearchedResult)
        //     .then(result => {
        //         // controle de l'existance de la promo, sinon 404 error
        //         if (result.rowCount == 0) {
        //             res.render('404')
        //         }
        //         res.locals.studentsResult = result.rows;
        //         res.render('students');
        //     })
        //     .catch(err => console.log(err.stack));
        // } else {
        //     res.render('404')
        // }
    }
         
    }

module.exports = mainController;