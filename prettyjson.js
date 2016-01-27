var fs = require('fs')

var json = fs.readFileSync(__dirname + '\\mowled.json');
var obj = JSON.parse(json);
var prettyJSON = JSON.stringify(obj, null, '\t')

fs.writeFileSync(__dirname + '\\mowledpretty.json', prettyJSON)
