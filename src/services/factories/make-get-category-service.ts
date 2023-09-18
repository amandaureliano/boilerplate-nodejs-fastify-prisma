import { GetCategoryService } from '../get-category'
import { PrismaCategoriesRepository } from '@/repositories/prisma/prisma-categories-repository'

export function makeGetCategoryService() {
  const categoriesRepository = new PrismaCategoriesRepository()
  const service = new GetCategoryService(categoriesRepository)
  return service
}
