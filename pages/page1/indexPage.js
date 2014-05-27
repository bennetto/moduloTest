/**
 * Created by benjamin on 10/05/2014.
 */
var module = require(__base+'/core/server/routeModule');

exports.render = function(req, res)
{

    res.render(__base+'/pages/page1/index', { title: 'ModuloCMS',module:module });
}
