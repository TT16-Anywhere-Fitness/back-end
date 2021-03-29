const db = require("../../data/db-config");

function find() {
    return db("locations")
}

function findBy(filter) {
    return db("locations").where(filter).orderBy("location_id");
}

function findById(id) {
    return db("locations").where("location_id", id).first()
}

function add(location) {
    return db("locations").insert(location, "location_id")
}

function update(id, location) {
    const locationId = id
    return db("locations").where("location_id", id).update(location)
    .then(() => {
        return db("locations").where("location_id", locationId).first()
    })
}

function remove(id) {
    return db("locations").where("location_id",id).del()
    .then(() => {
        return db("locations")
    })
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
}