
//Linq.get('cards').where(id).toEqual(1)

var fs = require("fs");

function LinQ(){
    var _data;
    
    this.register = function(path, alias){
         //read file
         var data = fs.readFileSync(path);
         try{
            _data = _data || {};
             _data[alias] = JSON.parse(data);
         }catch(err){
             throw err;
         }
         // add it to private object as alias
    }

    this.get = function(alias){
        if(_data && _data[alias]){
             return new Db(_data[alias]);
        }
        throw new Error("Data with alias "+ alias+ " not found");
    }
}


function Db(_dataSet){

    var _Db = this;
    var _assert = new Assert();
    var _query = {};


    this.where = function(_prop){
       _query._prop = _prop;
       return _assert;
    }

    function Assert(){
        this.toEqual = function(_val){
          var data = _dataSet.filter(function(_item){
                return _item[_query._prop] == _val;
          });
          return data;
        }
     }
}


module.exports = new LinQ();




