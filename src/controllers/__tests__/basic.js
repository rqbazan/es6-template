import supertest from 'supertest'
import server from '~/server'

describe('basic controller', () => {
  it('should return ok', async () => {
    const res = await supertest(server).get('/')

    expect(res.body).toEqual({ text: 'ok' })
  })
})
