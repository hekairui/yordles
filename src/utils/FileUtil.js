
var fs = require('fs'),  
    fileList = [];

function walk(path){  
  var dirList = fs.readdirSync(path);
  dirList.forEach(function(item){
    if(fs.statSync(path + '/' + item).isDirectory()){
      walk(path + '/' + item);
    }else{
      fileList.push(path + '/' + item);
    }
  });
  return fileList
}

var FSO = {
  walk: function (path) {
    return walk(path)
  }
};

module.exports = FSO;
