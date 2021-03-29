const db = require('../../data/db-config');

function find() {
    return db("instructors").select("instructor_id", "username").orderBy("instructor_id");
}

function findBy(filter) {
    return db("instructors").where(filter).orderBy("instructor_id");
}

function findById(id) {
    return db("instructors").where("instructor_id", id).first();
}

async function add(client) {
    const [id] = await db("instructors").insert(client, "instructor_id");
    return findById(id);
}

function update(id, client) {
    const instructorId = id
    return db("instructors").where("instructor_id", id).update(client)
    .then(() => {
        return db("instructors").where("instructor_id", instructorId).first()
    })
}

function remove(id) {
    return db("instructors").where("instructor_id", id).del()
    .then(() => {
        return db("instructors")
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