import { CategoriesRepository } from '@/repositories/categories-repository'
import { Category } from '@prisma/client'

interface RegisterServiceRequest {
  name: string
}

interface RegisterServiceResponse {
  category: Category
}
export class RegisterService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({ name }: RegisterServiceRequest): Promise<RegisterServiceResponse> {
    const category = await this.categoriesRepository.create({ name })
    return { category }
  }
}
