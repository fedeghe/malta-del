This plugin can be used on all files and simply deletes the file named as the `name` parameter passed (relative to outfolder) 

Options : 
    - **name** name of the file to delete

Sample usage:  

    malta app/media/daisy.svg public/media -plugins=malta-svg2png...malta-del[name:\"daisy.svg\"]

    or in the .json file :

    "app/media/daisy.svg" : "public/media -plugins=malta-svg2png...malta-del[name:\"daisy.svg\"]"

or in a script : 

    var Malta = require('malta');
    Malta.get().check([
        'app/media/daisy.svg',
        'public/media',
        '-plugins=malta-svg2png...malta-del[name:\"daisy.svg\"]',
        '-options=showPath:false,watchInterval:500,verbose:0'
        ]).start(function (o) {
            var s = this;
            console.log('name : ' + o.name)
            console.log("content : \n" + o.content);
            'plugin' in o && console.log("plugin : " + o.plugin);
            console.log('=========');
            */
        });
