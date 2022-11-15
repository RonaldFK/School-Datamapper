const client = require('../data/dataOclock.js')

const mainController = {
    // Afficher l'ensemble de mes promos
     async displayPromos(req,res){
        const findPromo = 'SELECT * FROM promo;';
        const result = await client.query(findPromo)
        try { res.locals.promoResult = result.rows;
            res.render('index');}          
        catch(err) {console.log(err.stack)};
                },
     // Je récupère la liste des students de la promo en cours de visualisation
     async displayStudents(req,res){
        const students = `SELECT * FROM students WHERE promo=${req.params.promo};`;
        const result = await client.query(students)
        try {res.locals.studentsResult = result.rows;
            res.render('students');
        }
        catch (error) {console.log(error.stack)}
     },
     // Gestion de la recherche d'une promo
     async displaySearch(req,res){
        // Gestion de la recherche de la promo
        const promoSearched = req.query.promoSearched;
        const promoSearchedResult = `SELECT * FROM students WHERE promo=${promoSearched};`;
        if (promoSearched) {
            const result = await client.query(promoSearchedResult)
            // si la promo n'existe pas
            try {if (result.rowCount == 0) {
                res.render('404')}
                res.locals.studentsResult = result.rows;
                res.render('students');
                console.log(result.rowCount);
            }
            catch (error) { console.log(error.stack);res.render('404')}
        }
            
        },
    // Gestion insertion d'un nouvel élève    
    async InsertData(req,res){
        console.log(req.body.prenom)
        //const promoSearched = req.query.promoSearched;
        const dataToInsert = `INSERT INTO students (first_name,last_name,promo) VALUES ('${req.body.prenom}','${req.body.nom}',${req.body.promo});`;
        const result = await client.query(dataToInsert)
        try {
            console.log(result.rowCount);
            res.redirect('/promo/:promo');
        }
        catch(error){
            console.log(err.stack)
        }
    }
         
    }

module.exports = mainController;