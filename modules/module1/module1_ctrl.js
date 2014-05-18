return  module1 = function(){

    var ejs = require('ejs');
    this.render = function()
    {
        var html = undefined;
        ejs.renderFile('./modules/module1/module1.ejs',{ h1: 'modulo1' },function(err,htmlRender){
            html=htmlRender;
        });

        return html;
    }


    this.save = function()
    {

    }


    this.refresh = function()
    {

    }
};