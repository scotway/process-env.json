# process-env.json

Tiny, Simple library to load config json file into the process.env object.

####Regular Example:
```
//config.json
{
  "VALUE": "AWESOME"
}
```

```
//index.js
require('process-env.json')();

console.log(process.env.VALUE);
```

####Custom Example:
```
//custom-process-env.json
{
  "VALUE": "AWESOME"
}
```

```
//index.js
require('process-env.json')('custom-process-env.json');

console.log(process.env.VALUE);
```

####NODEMON Example:
```
//nodemon.json
{
	"restartable": "r",
	"ignore": [
		"node_modules/"
	],
	"verbose": true,
	"watch": [
		"./"
	],
	"env":{
		"MONGO":"mongodb://127.0.0.1:27017",
		"PORT":"3401",
	},
	"ext": "js json"
}
```

```
//index.js
require('process-env.json')('nodemon.json');

console.log(process.env.MONGO);
```

Why would I need to this if I have nodemon? Well... if you have to a nodemon server but also need to run cli scripts. This library allows to you use your nodemon file and load it into the process.env for cli scripts. Helpful, right?
