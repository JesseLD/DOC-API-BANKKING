const Router = require("express").Router;
const docsController = require("../controllers/docs.controller")
const docs = Router();

docs.get("/",docsController.index);



docs.use((req,res)=>{
  res.sendStatus(404)
})
module.exports = docs
