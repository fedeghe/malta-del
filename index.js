const path = require('path'),
    fs = require('fs');

function malta_del(o, options) {
    const self = this,
        start = new Date(),
        pluginName = path.basename(path.dirname(__filename));
        
    let msg;

    return (solve, reject) => {
        const dir = path.dirname(o.name);
        fs.unlink(dir + '/' + options.name, err => {
            err && self.doErr(err, o, pluginName);
            msg = 'plugin ' + pluginName.white() + ' deleted ' + dir + '/' + options.name;
            err
                ? reject(`Plugin ${pluginName} deletion error:\n${err}`)
                : solve(o);
            self.notifyAndUnlock(start, msg);
        });
    };
}
module.exports = malta_del;