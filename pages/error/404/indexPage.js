/**
 * Created by benjamin on 10/05/2014.
 */
var module = require('../../../core/server/routeModule');

exports.render = function(req, res)
{

    res.render('./pages/error/error', { title: 'ModuloCMS',module:module });
}
