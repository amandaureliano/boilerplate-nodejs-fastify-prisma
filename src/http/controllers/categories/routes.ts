import { FastifyInstance } from 'fastify'
import { register } from '@/http/controllers/categories/register'
import { search } from '@/http/controllers/categories/get'
import { remove } from '@/http/controllers/categories/delete'

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/v0/categories', search)
  app.post('/v0/categories', register)
  app.delete('/v0/categories/:id', remove)
}
