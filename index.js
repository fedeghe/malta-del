var path = require('path'),
	fs = require('fs');

function malta_del(o, options) {
	var self = this,
		start = new Date(),
		msg,
		pluginName = path.basename(path.dirname(__filename)),
		doErr = function (e) {
			console.log(('[ERROR on ' + o.name + ' using ' + pluginName + '] :').red());
			console.dir(e);
			self.stop();
		};
	return function (solve, reject){
		var dir = path.dirname(o.name);
		fs.unlink(dir + '/' +  options.name, function (err) {
            err && doErr(err);
			msg = 'plugin ' + pluginName.white() + ' deleted ' + dir + '/' +  options.name;
            solve(o);
  			self.notifyAndUnlock(start, msg);
		});
	};
}
// malta_del.ext = ['*'];
module.exports = malta_del;