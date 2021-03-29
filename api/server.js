const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const instructorRouter = require('./instructor/instructor-router');
const clientRouter = require('./client/client-router');
const locationRouter = require('./location/location-router');
const classRouter = require('./classes/class-router');
const ccRouter = require('./client_classes/cc-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use("/api/auth", authRouter);
server.use("/api/instructors", instructorRouter);
server.use("/api/clients", clientRouter);
server.use("/api/locations", locationRouter);
server.use("/api/classes", classRouter);
server.use("/api/attending", ccRouter);

server.get('/', (req,res) => {
    res.status(200).json('*** AnyWhere Fitness: API RUNNING ***')
})

server.use((err, req, res, next) => {
    return res.status(500).json({ 
      error: "ERROR: Problem with communicating to server",
      message: err.message,
      stack: err.stack
     })
  })

module.exports = server;