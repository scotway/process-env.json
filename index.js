const processEnvJSON = (filename = 'config.json', appIndex = 0) => {

  let file = filename;

  process.argv.forEach((val, index) => {
    if(val.indexOf('--config_file') > -1) {
      const [cmd, value] = val.split('=');
      file = value;
    } 
  });

  const fullParentPath = module.parent.filename;
  const pathParts = fullParentPath.split(/\/|\\/i);
  pathParts.pop();
  const parentDirname = pathParts.join('/');
  const config = require(`${parentDirname}/${file}`);

  let values;
  if (config.apps) {
    values = config.apps[appIndex].env || {};
  } else if (config.env) {
    values = config.env;
  } else {
    values = config;
  }

  Object.keys(values).forEach((key) => {
    process.env[key] = values[key];
  });
}

module.exports = processEnvJSON;
