import { RegisterService } from '@/services/register-category'
import { PrismaCategoriesRepository } from '@/repositories/prisma/prisma-categories-repository'

export function makeRegisterService() {
  const categoriesRepository = new PrismaCategoriesRepository()
  const service = new RegisterService(categoriesRepository)

  return service
}
