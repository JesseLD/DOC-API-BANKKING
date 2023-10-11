const Router = require("express").Router;
const docs = require("./docs.routes");

const routes = Router();

routes.get("/",(req,res)=>{
  res.send("Hello World")
})

routes.use("/docs",docs)

routes.use((req,res)=>{
  res.sendStatus(404)
})
module.exports = routes
