import { makeGetCategoryService } from '@/services/factories/make-get-category-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const getCategory = makeGetCategoryService()
  const categories = await getCategory.execute()
  return reply.status(200).send(categories)
}
