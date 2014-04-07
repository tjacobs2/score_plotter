var Structures = require('../models/structures');

module.exports.controller = function(app) {

  //GET /
  app.get('/', function (req, res) {
    Structures.all_structures(function(err, all) {
      var structures = all;
      console.log(structures);
      res.render('index',
      {
        title : 'Home',
        structures : structures
      })
    });
  });

}
