var Reader = require("./Reader");
var Processor = require("./Processor");
var Writer = require("./Writer");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");


var leitor = new Reader();
var escritor = new Writer();


async function main(){
    var data = await leitor.Read("./users.csv");
    var dataProcessed = Processor.Process(data);
    
    var usuarios = new Table(dataProcessed);
    
    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now()+".html", html);
    PDFWriter.WritePDF(Date.now()+".pdf", html)

}
main();