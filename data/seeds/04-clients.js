exports.seed = function(knex) {
  return knex("clients").insert([
    {
      id:1,
      username:"KenanDolic1",
      password:"newGains",
      role:2
    },
    {
      id:2,
      username:"Lifter2",
      password:"password123",
      role:2
    },
    {
      id:3,
      username:"protein4days",
      password:"nocarbs",
      role:2
    },
  ]);
};