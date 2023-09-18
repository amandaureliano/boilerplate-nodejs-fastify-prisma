import { makeDeleteCategoryService } from '@/services/factories/make-delete-category-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function remove(request: FastifyRequest<{
  Params: {
    id: string
  }; }>, reply: FastifyReply) {
  const deleteCategory = makeDeleteCategoryService()
  const { id } = request.params
  await deleteCategory.execute({ categoryId: id })
  return reply.status(200).send({ message: 'Ok'})
}
