const app = require("./config/express");
const dotenv = require("dotenv");

dotenv.config();


let server

server = app.listen(process.env.PORT,()=>{
  console.log(`Server running on port ${process.env.PORT}`)
})



module.exports = server