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
        console.log(students);
        client
        .query(students)
        .then(result => {
                res.locals.studentsResult = result.rows;
                //console.log(studentsResult)  
                res.render('students');
            })
            .catch(err => console.log(err.stack));
     }
         
    }

module.exports = mainController;