const processEnvJSON = (filename = 'config.json') => {
  const fullParentPath = module.parent.filename;
  const pathParts = fullParentPath.split('/');
  pathParts.pop();
  const parentDirname = pathParts.join('/');
  const config = require(`/${parentDirname}/${filename}`);
  const values = config.env || config;
  Object.keys(values).forEach((key) => {
    process.env[key] = values[key];
  });
}

module.exports = processEnvJSON;
