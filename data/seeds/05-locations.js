exports.seed = function(knex) {
  return knex("locations").insert([
    {
      location:"AnyWhere Fitness West",
      date:"3/29/2021",
      startTime:"5:00 a.m."
    },
    {
      location:"AnyWhere Fitness South",
      date:"3/29/2021",
      startTime:"6:00 p.m."
    },
    {
      location:"AnyWhere Fitness East",
      date:"3/29/2021",
      startTime:"12:30 p.m."
    },
  ]);
};