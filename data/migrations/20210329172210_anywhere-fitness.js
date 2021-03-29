
exports.up = function(knex) {
    return knex.schema.createTable("roles", tbl => {
        tbl.increments();
        tbl.string("name",128).notNullable().unique()
    })
    .createTable("instructors", tbl => {
        tbl.increments()
        tbl.string("username",128).notNullable().unique()
        tbl.string("password",128).notNullable()
        tbl.integer("role")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("roles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
    .createTable("clients", tbl =>{
        tbl.increments()
        tbl.string("username",128).notNullable().unique()
        tbl.string("password",128).notNullable()
        tbl.integer("role")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("roles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
    .createTable("locations", tbl =>{
        tbl.increments()
        tbl.string("location",128).notNullable()
        tbl.string("date",128).notNullable()
        tbl.string("startTime",128).notNullable()
    })
    .createTable("classes", tbl => {
        tbl.increments()
        tbl.string("name",128).notNullable().unique()
        tbl.string("type",128).notNullable()
        tbl.string("level",128).notNullable()
        tbl.string("duration",128).notNullable()
        tbl.string("classSize",128).notNullable()
        tbl.string("attendees",128).notNullable()
        tbl.integer("location")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("locations")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
    .createTable("clients_classes", tbl =>{
        tbl.increments()
        tbl.integer("client_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("clients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        tbl.integer("class_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("classes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("clients_classes")
    .dropTableIfExists("classes")
    .dropTableIfExists("locations")
    .dropTableIfExists("clients")
    .dropTableIfExists("instructors")
    .dropTableIfExists("roles")
};
};

exports.down = function(knex) {
  
};
