const packageJson = require('./package.json');

module.exports = {
  apps: [{
    name: packageJson.name,
    script: packageJson.main,
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
