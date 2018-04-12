describe("Linq2Json", function(){

    var instance;

    beforeEach(function(){
        fsData = {};
        instance = require("./index.js");
    });

    describe("happy Paths", function(){

        beforeEach(function(){
            instance.register("./mock/users.json", "users"); 
        })

        it("gets data with where clause",function(){
               var _db = instance.get("users");
               var result = _db.where("id").toEqual("4");
               console.log(result);
               expect(result[0].id).toEqual("4");

        });

    });
    

});