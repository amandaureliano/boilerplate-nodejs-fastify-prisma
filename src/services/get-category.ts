import { CategoriesRepository } from '@/repositories/categories-repository'
import { Category } from '@prisma/client'
import { ResourceNotFound } from './errors/resource-not-found'

interface GetCategoryServiceResponse {
  category: Category
}

export class GetCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<GetCategoryServiceResponse> {
    const category = await this.categoriesRepository.findAll()

    if (!category) {
      throw new ResourceNotFound()
    }

    return { category }
  }
}
