const db = require("../../data/db-config");

function find() {
    return db("clients_classes").select("id").orderBy("id")
}

function findById(id) {
    return db("clients_classes").where("id", id).first()
}

function removeClient(id) {
    return db("clients_classes").where("client_id",id).del()
    .then(() => {
        return db("clients_classes")
    })
}
function addClient(id) {
    return db("clients_classes").insert("client_id",id).where("class_id", id).first()
}

module.exports = {
    find,
    findById,
    removeClient,
    addClient,
}