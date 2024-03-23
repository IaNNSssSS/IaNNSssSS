import {openDb} from "../configDB.js";

export async function createTable(){
    openDb().then(db => {
            db.exec("CREATE TABLE IF NOT EXISTS Membros (Id INTEGER PRIMARY KEY, Nome TEXT, Idade INTEGER, Estado TEXT, Cidade TEXT, Email TEXT)")
        });
}

export async function insertMembros(req, res){
    let Membros = req.body;
    openDb().then(db => {
            db.run("INSERT INTO Membros (Nome, Idade, Estado, Cidade) VALUES (?,?,?,?)", [Membros.Nome, Membros.Idade, Membros.Estado, Membros.Cidade])
        });
        res.json({
            "statusCode": 0,
            "msg": "Membro adicionado"
        })
}

export async function updateMembros(req, res){
    let Membros = req.body;
    openDb().then(db => {
            db.run("UPDATE Membros SET Nome=?, WHERE Id=?, Idade=?, Estado=?, Cidade=?", [Membros.Nome, Membros.Idade, Membros.Estado, Membros.Cidade, Membros.Id])
        });
        res.json({
            "statusCode": 0,
            "msg": "Membro atualizado"
        })
}

export async function selectMembros(req, res){
    openDb().then(db => {
             db.all("SELECT * FROM Membros")
            .then(Membros => res.json(Membros))
        });
        
}

export async function selectMembro(req, res){
    let Id = req.body.Id
    openDb().then(db => {
            db.get("SELECT * FROM Membros WHERE Id=?", [Id])
            .then(Membro => res.json(Membro))
        });
}

export async function deleteMembro(req, res){
    let Id = req.body.Id
    openDb().then(db => {
            db.get("DELETE FROM Membros WHERE Id=?", [Id])
            .then(res => res)
        });
        res.json({
            "statusCode": 0,
            "msg": "Membro deletado"
        })
}