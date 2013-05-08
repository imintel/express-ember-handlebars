var lib = require('./lib');

module.exports = function(source,options) {
    if (!source) throw new Error('connect-handlebars requires file path');

    if ( options === undefined) {
        options = {};
    }

    return function(req,res,next) {
        var output = [];
        lib.processTemplate(options, source, undefined, output);
        output = output.join('');
        res.writeHead(200,{
            'Content-Type': 'text/javascript; chartset=' + ( options.encoding || lib.defaults.encoding )
        });
        return res.end(output,( options.encoding || lib.defaults.encoding ));
    };
};
