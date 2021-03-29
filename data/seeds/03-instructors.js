exports.seed = function(knex) {
  return knex("instructors").insert([
    {
      instructor_id:1,
      username:"DavidGoggins",
      password:"chicken1",
      role:1
    },
    {
      instructor_id:2,
      username:"Instructor2",
      password:"NoPain123",
      role:1
    },
    {
      instructor_id:3,
      username:"kdolic123",
      password:"lifting123",
      role:1
    },
  ]);
};
