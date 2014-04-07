var sqlite = require('sqlite3');
var db = new sqlite.Database('test_database.db3');

//CREATE TABLE pose_conformations(
//        struct_id INTEGER NOT NULL,
//        annotated_sequence TEXT,
//        total_residue INTEGER,
//        fullatom INTEGER,
//        FOREIGN KEY (struct_id) REFERENCES structures(struct_id) DEFERRABLE INITIALLY DEFERRED);

exports.all_structures = function(callback) {
  db.all('Select s.struct_id, c.total_residue from structures s join pose_conformations c on s.struct_id = c.struct_id;', function(err, all) {
    if(err)
      console.error(err);
    callback(err, all);
  });
};

exports.group_structures = function(group, callback) {
  //were group = group
  //db.all('Select s.struct_id, c.total_residue from structures s join pose_conformations c on s.struct_id = c.struct_id;', function(err, all) {
  //  if(err)
  //    console.error(err);
  //  callback(err, all);
  //});
};

exports.each_structure = function(callback) {
  db.each('Select * from structures;', function(err, row) {
    if(err)
      console.error(err);
    callback(err, row);
  });
};

