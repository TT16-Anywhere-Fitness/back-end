const db = require("../../data/db-config");

function find() {
    return db("classes")
}

function findById(id) {
    return db("classes").where("id", id).first()
}

function add(classData) {
    return db("classes").insert(classData, "id")
}

function update(id, classes) {
    const classId = id
    return db("classes").where("id",id).update(classes)
    .then(() => {
        return db("classes").where("id", classId).first()
    })
}

function remove(id) {
    return db("classes").where("id", id).del()
    .then(() => {
        return db("classes")
    })
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}