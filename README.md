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
