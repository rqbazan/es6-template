/* eslint-disable global-require */
import createInstance from 'fastify'
import registerCustomPlugins from './plugins'

function buildFastify() {
  const fastify = createInstance({
    logger: true,
    ignoreTrailingSlash: true
  })

  fastify.register(require('fastify-cors'))

  fastify.register(require('fastify-helmet'))

  registerCustomPlugins(fastify)

  return fastify
}

export { buildFastify }
