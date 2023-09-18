import { CategoriesRepository } from '@/repositories/categories-repository'
import { Category } from '@prisma/client'

interface DeleteCategoryServiceRequest {
  categoryId: string
}

interface DeleteCategoryServiceResponse {
  categoryId: string
}

export class DeleteCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({ categoryId }: DeleteCategoryServiceRequest): Promise<DeleteCategoryServiceResponse> {
    await this.categoriesRepository.delete(categoryId)
    return { categoryId }
  }
}
