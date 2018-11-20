const fs = require('fs');

fs.readFile('./texto.txt', function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

/* fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('Archivo creado');
    }
}); */

/**
 * SYNC -----------------------
 * const users = query('SELECT * FROM Users');
 * 
 * ASYNC ----------------------
 * query('SELECT * FROM Users', function(err, users) {
 *  if(err) {
 *      console.log(err);
 *  }
 *  if(users) {
 *      lalala;
 *  }
 * });
 */