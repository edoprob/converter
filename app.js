var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");


var leitor = new Reader();


async function main(){
    var data = await leitor.Read("./users.csv");
    var dataProcessed = Processor.Process(data);
    var usuarios = new Table(dataProcessed);
    console.log(usuarios.header)
    console.log(usuarios.rows)
    

}
main();