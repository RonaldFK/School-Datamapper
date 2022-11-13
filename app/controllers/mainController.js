const client = require('../data/dataOclock.js')

const mainController = {

    displayPromos(req,res){
        const promos = 'SELECT * FROM promo;';
        client
                .query(promos)
                .then(result => {
                    res.locals.promoResult = result.rows;
                    res.render('index');
                })
                .catch(err => console.log(err.stack));
                },
     displayStudents(req,res){
        const students = `SELECT * FROM students WHERE promo=${req.params.promo};`;
        client
        .query(students)
        .then(result => {
                res.locals.studentsResult = result.rows;
                //console.log(studentsResult)  
                res.render('students');
            })
            .catch(err => console.log(err.stack));
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
                // controle de l'existance de la promo
                if (result.rowCount == 0) {
                    res.render('404')
                }
                res.locals.studentsResult = result.rows;
                res.render('students');
                console.log(result.rowCount);
            })
            .catch(err => console.log(err.catch));
        } else {
            res.render('404')
        }
        
    }
         
    }

module.exports = mainController;