var path = require('path'),
	fs = require('fs');

function malta_del(o, options) {
	var self = this,
		start = new Date(),
		msg;
	return function (solve, reject){
		var dir = path.dirname(o.name);
		fs.unlink(dir + '/' +  options.name, function (err) {

            if (err == null) {
                msg = 'plugin ' + path.basename(path.dirname(__filename)).white() + ' deleted ' + dir + '/' +  options.name;
            } else {
                console.log('[ERROR] del says:');
                console.dir(err);
                self.stop();
            }
  			solve(o);
  			self.notifyAndUnlock(start, msg);
		});
	};
}
// malta_del.ext = ['*'];
module.exports = malta_del;