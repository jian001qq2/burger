// Set up MySQL connection.
var mysql =require('mysql');
var connection ;
if (process.env.JAWSDB_URL){
   connection = mysql.createConnection(process.env.JAWSDB_URL)
}
   else{
    connection = mysql.createConnection({host:'localhost',
    user: "root",
    port:3306,
    password: "root",
    database:'burgers_db'
});
};
// Make connection.
connection.connect(err=>{
    if (err) {
        console.log("error connecting: "+err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
//Export connection for ORM to use
module.exports = connection;
