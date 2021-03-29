const db = require("../../data/db-config");

function find() {
    return db("classes")
}

function findById(id) {
    return db("classes").where("class_id", id).first()
}

function add(classData) {
    return db("classes").insert(classData, "class_id")
}

function update(id, classes) {
    const classId = id
    return db("classes").where("class_id",id).update(classes)
    .then(() => {
        return("classes").where("class_id", classId).first()
    })
}

function remove(id) {
    return db("classes").where("class_id", id).del()
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