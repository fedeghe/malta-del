var path = require('path'),
    fs = require('fs');

function malta_del(o, options) {
    var self = this,
        start = new Date(),
        msg,
        pluginName = path.basename(path.dirname(__filename));

    return function (solve, reject) {
        var dir = path.dirname(o.name);
        fs.unlink(dir + '/' + options.name, function (err) {
            err && self.doErr(err, o, pluginName);
            msg = 'plugin ' + pluginName.white() + ' deleted ' + dir + '/' + options.name;
            err
                ? reject(`Plugin ${pluginName} deletion error:\n${err}`)
                : solve(o);
            self.notifyAndUnlock(start, msg);
        });
    };
}
// malta_del.ext = ['*'];
module.exports = malta_del;