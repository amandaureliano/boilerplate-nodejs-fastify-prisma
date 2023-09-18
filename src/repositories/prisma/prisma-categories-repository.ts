import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { CategoriesRepository } from '../categories-repository'

export class PrismaCategoriesRepository implements CategoriesRepository {
  async findById(categoryId: string) {
    const category = await prisma.category.findUnique({ where: { id: categoryId } })
    return category
  }

  async findAll() {
    const categories = await prisma.category.findMany()
    return categories
  }

  async create(data: Prisma.CategoryCreateInput) {
    const category = await prisma.category.create({ data })
    return category
  }

  async delete(categoryId: string) {
    const deletedCategory = await prisma.category.delete({ where: { id: categoryId } })
    return deletedCategory
  }
}
