const processEnvJSON = (filename = 'config.json', appIndex = 0) => {
  const fullParentPath = module.parent.filename;
  const pathParts = fullParentPath.split(/\/|\\/i);
  pathParts.pop();
  const parentDirname = pathParts.join('/');
  const config = require(`${parentDirname}/${filename}`);

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
