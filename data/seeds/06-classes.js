exports.seed = function(knex) {
  return knex("classes").insert([
    {
      name:"Group Power",
      type:"Strength Training",
      level:"Advanced",
      duration:"2.5 hours",
      classSize:"15",
      attendees:"10",
      location:1
    },
    {
      name:"Group Ride",
      type:"Cycling",
      level:"Beginner-Intermediate",
      duration:"1 hour",
      classSize:"25",
      attendees:"18",
      location:2
    },
    {
      name:"Group Fight",
      type:"Cardio",
      level:"Beginner",
      duration:"45 minutes",
      classSize:"20",
      attendees:"15",
      location:3
    },
  ]);
};