var instance = require("./index.js");
instance.register("./mock/users.json", "users"); 
var _db = instance.get("users");
var result = _db.where("id").toEqual("4");
 console.log(result);