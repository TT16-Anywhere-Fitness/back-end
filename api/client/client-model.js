const db = require('../../data/db-config');

function find() {
    return db("clients").select("client_id", "username").orderBy("client_id");
}

function findBy(filter) {
    return db("clients").where(filter).orderBy("client_id");
}

function findById(id) {
    return db("clients").where("client_id", id).first();
}

async function add(client) {
    const [id] = await db("clients").insert(client, "client_id");
    return findById(id);
}

function update(id, client) {
    const clientId = id
    return db("clients").where("client_id", id).update(client)
    .then(() => {
        return db("clients").where("client_id", clientId).first()
    })
}

function remove(id) {
    return db("clients").where("client_id", id).del()
    .then(() => {
        return db("clients")
    })
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
};