const fs = require("fs");

function modifyUser(name, course, category){
    fs.readFile("./usuario.json", {encoding: "utf-8"}, (err, data)=>{
        if (err) {
            console.log(err);
        } else {
            var conteudo = JSON.parse(data);
            conteudo.nome = name;
            conteudo.curso = course;
            conteudo.categoria = category;
            
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), (err)=>{
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}


modifyUser("EDOVISQUI", "formação programação", "react native");