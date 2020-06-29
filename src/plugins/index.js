// @ts-check
import { basicPlugin } from './basic'

/**
 * @param fastify {import('fastify').FastifyInstance}
 */
export default fastify => {
  fastify.register(basicPlugin)
}
