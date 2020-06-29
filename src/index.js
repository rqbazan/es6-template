// @ts-check
import { buildFastify } from './server'

async function main() {
  const port = Number(process.env.PORT || 4000)

  const fastify = buildFastify()

  try {
    await fastify.listen(port)

    fastify.log.info(`Server listening at ${port}`)
  } catch (error) {
    fastify.log.error(error)

    process.exit(1)
  }
}

main()
