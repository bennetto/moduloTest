/**
 * Created by benjamin on 18/05/2014.
 */
var fs = require('fs');
var express = require('express');
var router = express.Router();

fs.readdir(__base +"/pages",function(error,directoryObject) // read modules file
{
    console.log("Loading pages start : ");
    for( var i in directoryObject){ // find all module in folder modules
        console.log("Loading "+directoryObject[i]+" start");
        var config = require(__base +'/pages/'+directoryObject[i]+'/conf.json'); // read confFile

        var  page = require(__base +'/pages/'+directoryObject[i]+'/'+config.controller+'.js'); //load specific pages ctrl

        /* GET home page. */
        router.get(config.routePath, function(req, res) {
            page.render(req, res) ;
        });
        console.log("Loading "+directoryObject[i]+" done");
    }
    console.log(" ");
});

module.exports = router;