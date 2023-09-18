import { DeleteCategoryService } from '../delete-category'
import { PrismaCategoriesRepository } from '@/repositories/prisma/prisma-categories-repository'

export function makeDeleteCategoryService() {
  const categoriesRepository = new PrismaCategoriesRepository()
  const service = new DeleteCategoryService(categoriesRepository)
  return service
}
