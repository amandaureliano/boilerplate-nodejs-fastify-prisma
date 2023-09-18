import { Prisma, Category } from '@prisma/client'

export interface CategoriesRepository {
  findById(categoryId: string): Promise<Category | null>
  findAll(): any
  create(data: Prisma.CategoryCreateInput): Promise<Category>
  delete(categoryId: string): Promise<Category>
}
