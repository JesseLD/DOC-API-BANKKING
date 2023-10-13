const fs = require("fs")
const path = require("path")
exports.index = async (req,res)=>{

  const file = path.join(__dirname,"../database/endpoints.json")

  const data = fs.readFileSync(file,"utf8");

  const jsonData = JSON.parse(data)

  res.render("Index",{jsonData})

} 