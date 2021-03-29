exports.seed = function(knex) {
  return knex("instructors").insert([
    {
      id:1,
      username:"DavidGoggins",
      password:"chicken1",
      role:1
    },
    {
      id:2,
      username:"Instructor2",
      password:"NoPain123",
      role:1
    },
    {
      id:3,
      username:"kdolic",
      password:"lifting123",
      role:1
    },
  ]);
};
