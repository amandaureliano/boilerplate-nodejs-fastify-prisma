import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeRegisterService } from '@/services/factories/make-register-category-service'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({ name: z.string() })
  const { name } = registerBodySchema.parse(request.body)

  try {
    const registerService = makeRegisterService()

    await registerService.execute({ name })
  } catch (error) {
    throw error
  }

  return reply.status(201).send()
}
