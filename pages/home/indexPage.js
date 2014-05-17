/**
 * Created by benjamin on 10/05/2014.
 */
var module1 = require('../../modules/module1/module1_ctrl');

exports.render = function(req, res)
{
 
    res.render('./pages/home/index', { title: 'ModuloCMS',module1:module1 });
}
