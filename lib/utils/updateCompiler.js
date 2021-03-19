'use strict';

const DevServerPlugin = require('./DevServerPlugin');

function updateCompiler(compiler, options) {
  const compilers = compiler.compilers || [compiler];
  const logger = compiler.getInfrastructureLogger('webpack-dev-server');

  // eslint-disable-next-line no-shadow
  compilers.forEach((compiler) => {
    new DevServerPlugin(options, logger).apply(compiler);
  });
}

module.exports = updateCompiler;
