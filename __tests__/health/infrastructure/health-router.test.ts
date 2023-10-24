import request from 'supertest'
import { App } from '../../../src/app'

const app = new App()

describe('API', () => {
  it('Should be healthy', async () => {
    const response = await request(app._app).get('/api/health')
    expect(response.status).toBe(200)
  })
})
