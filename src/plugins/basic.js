// @ts-check
import BasicController from '~/controllers/basic'

/**
 * @param fastify {import('fastify').FastifyInstance}
 */
async function basicPlugin(fastify) {
  const controller = new BasicController()

  fastify.get('/', controller.getText.bind(controller))
}

export { basicPlugin }
