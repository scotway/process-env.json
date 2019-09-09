# process-env.json

Tiny, Simple library to load config.json file into the process.env object.

```
npm i process-env.json
```

#### Regular Example:
```javascript
//config.json
{
  "VALUE": "AWESOME"
}
```

```javascript
//index.js
require('process-env.json')();

console.log(process.env.VALUE);
```

#### Custom Example:
```javascript
//custom-process-env.json
{
  "VALUE": "AWESOME"
}
```

```javascript
//index.js
//pass file name. relative paths work
require('process-env.json')('custom-process-env.json');

console.log(process.env.VALUE);
```

#### PM2 Example:
```javascript
//pm2.json
{
  "apps": [
    {
      "name": "app1",
      "script": "index.js",
      "cwd": "./app1",
      "exec_mode": "cluster",
      "watch": true,
      "env": {
        "PORT":"3333",
        "MONGO_DB":"mongodb://127.0.0.1:27017/db"
      }
    },
    {
      "name": "app2",
      "script": "index.js",
      "cwd": "./app2",
      "exec_mode": "cluster",
      "watch": true,
      "env": {
        "PORT":"3444",
        "MONGO_DB":"mongodb://127.0.0.1:27017/app"
      }
    }
  ]
}
```

```javascript
//index.js
//pass file name
require('process-env.json')('pm2.json');

console.log(process.env.MONGO);
```

Note: for pm2 file with multiple apps. There is a secord argument you can supply on the require.

```javascript
//index.js
//(filename, appIndex)
require('process-env.json')('pm2.json', 1);

console.log(process.env.MONGO);
```


Why would I need this if I have pm2 or nodemon? Well... if you have to a pm2 or nodemon server but also need to run cli scripts, this would be perfect for you. This library allows to you use your pm2 or nodemon file and load it into the process.env for cli scripts. Helpful, right?

#### NODEMON Example:
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

### Multiple ENVs

For situations where you have mutliple envs and need to switch you env values, you can supply --config_file={env}.json and process-env.json will add that as the filename without you having to change your code.

#### Multiple ENV configs Example:
```
//qa.json
{
  "FOO": "BAR"
}
```

```
//staging.json
{
  "FOO": "BAZ"
}
```

```
//index.js
require('process-env.json')('nodemon.json');
console.log(process.env.FOO);
```

```
node index.js --config_test=qa.json
//logs BAR

node index.js --config_test=staging.json
//logs BAZ
```
