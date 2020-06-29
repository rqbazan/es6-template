import supertest from 'supertest'
import { buildFastify } from '~/server'

describe('basic controller', () => {
  const fastify = buildFastify()

  beforeAll(() => fastify.ready())

  afterAll(() => fastify.close())

  it('should return ok', async () => {
    const res = await supertest(fastify.server).get('/')

    expect(res.body).toEqual({ text: 'ok' })
  })
})
