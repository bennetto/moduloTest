var fs = require("fs");



fs.readdir("modules",function(error,directoryObject) // read modules file
{
    console.log("Loading modules start : ");
    for( var i in directoryObject){ // find all module in folder modules
        console.log("Loading "+directoryObject[i]+" start");
        var config = require('../../modules/'+directoryObject[i]+'/conf.json'); // read confFile
        require('../../modules/'+directoryObject[i]+'/'+config.controller+'.js'); //load specific module ctrl
        module1Require = new module1();
        module.exports["module1"] = module1Require;
        console.log("Loading "+directoryObject[i]+"done");
    }
    console.log(" ");
});