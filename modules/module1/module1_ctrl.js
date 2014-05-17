
var ejs = require('ejs');
exports.render = function()
{
    var html = undefined;
   ejs.renderFile('./modules/module1/smodule1.ejs',{ h1: 'modulo1' },function(err,htmlRender){
       html=htmlRender;
    });
   
  
   return html;
   
}
