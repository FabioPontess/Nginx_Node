const express = require('express')
const app = express()
const port = 3000


const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'Nginx_Node_db'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql0 = 'create table people (id int not null auto_increment, name varchar(255), primary key(id));'
connection.query(sql0, function (error, results, fields){
    if(error) {
        if (error.errno !=  1050){
            return console.log(error);
        }else{
            console.log(error.sqlMessage + '. Continuando processo.');
        }
    }else{
        console.log('criou a tabela!');
    }

})


const sql = 'insert into people (name) values (?)'
const values = [['Fabio Luiz Pontes']];

connection.query(sql,[values], function (error, results, fields){
    if(error) {
        console.log('Erro no insert!');
    }else{
        console.log('Sucesso no insert!');
    }

})

 var name = null
 //connection.query('SELECT name FROM people where id = (select max(id) from people)', (err, rows) => {
    connection.query('SELECT name FROM people ', (err, rows) => {
    if (err){
        throw err
    } else{
        rows.forEach(row => {
            if (row.name == null){
                foreach.end
            }
            //console.log(` Ola FullCycle: ${row.name}`)
            if (name == null) {
                name = row.name;
            }else{
                name = name + ", " + row.name
            }

        });

        console.log('Olá FullCycles: ' + name)
        app.get('/', (req,res) => {
            res.send(`<h1> Ola FullCycle: <br> ${name}`)

        
        
        })
    }
})


connection.end()


//app.get('/', (req,res) => {
//    res.send('<h1> Ola FullCycle: ' 
//    +'Fabio Pontes</h1>')
//})

app.listen(port, ()=>{
    console.log('Rodando na porta ' + port)

})