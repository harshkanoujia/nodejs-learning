var _= require('underscore');  //underscore/index.js

//core module   : 1st it assumes it is core modules but that not because underscore is not a core module
//File or folder:  2nd it assumse it is file or folder(local files) in same folder like(./underscore or ./underscore.js) but this not
//node_modules  : then it assumes the module we have specify is a third party module or node modules inside file 

var result= _.contains([1,2,3],2);
console.log(result)

// "ls node_modules/" this command to check the what we have in node modules folder 