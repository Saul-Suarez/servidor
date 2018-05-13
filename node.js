let http = require('http');
let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("mySQL Connected!");

    // con.query("CREATE DATABASE mydb", function(err, result) {
    //    if (err) throw err;
    //   console.log("Database created");
    // });

    // let create_usuarios = "CREATE TABLE usuarios (userid INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255))";
    // con.query(create_usuarios, function(err, result) {
    //   if (err) throw err;
    // console.log("Table usuarios created");
    // });

    //var addcolumn_usuarios = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    //con.query(addcolumn_usuarios, function (err, result) {
    //    if (err) throw err;
    //    console.log("columna añadida");
    //});

    //  let create_amigos = "CREATE TABLE amigos (userid VARCHAR(255), friendid VARCHAR(255))";
    // con.query(create_amigos, function(err, result) {
    //    if (err) throw err;
    //    console.log("Table amigos created");
    // });

    // let create_conversaciones = "CREATE TABLE conversaciones (userid VARCHAR(255), friendid VARCHAR(255), talkingid VARCHAR(255), description VARCHAR(255))";
    // con.query(create_conversaciones, function(err, result) {
    //   if (err) throw err;
    //  console.log("Table conversaciones created");
    // });
    /*
        var insert_usuarios = "INSERT INTO usuarios (name, password) VALUES ('Mar', 'sol')";
        con.query(insert_usuarios, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted in usuarios");
            console.log(`ID: ${result.insertId}`);
        });

        var insert_conversaciones = "INSERT INTO conversaciones (userid, friendid, talkingid, description) VALUES ?";
        var values = [
            [1, 2, 1, 'hola'],
            [1, 2, 2, 'hola tú también']
        ];
        con.query(insert_conversaciones, [values], function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows + " in conversaciones");
        });

        var insert_amigos = "INSERT INTO conversaciones (userid, friendid) VALUES ?";
        var values1 = [
            [1, 2],
            [1, 3],
            [1, 4]
        ];
        con.query(insert_amigos, [values1], function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows + " in amigos");
        });

        con.query("SELECT * FROM usuarios", function(err, result, fields) {
            if (err) throw err;
            console.log(result);
        });

    */


});


http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ Estatus: 'deleted', error_code: -1 }));
    let objetoJSON = '{ "Estatus": "deleted", "error_code": -1 }';
    res.write(objetoJSON.toString());
    res.end();
}).listen(8080);