import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'

import { register } from '@/http/controllers/users/register'
import { authenticate } from '@/http/controllers/users/authenticate'
import { profile } from '@/http/controllers/users/profile'
import { refresh } from './refresh'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.patch('/token/refresh', refresh)
  app.get('/me', { onRequest: [verifyJWT] }, profile)

  app.post('/v0/users', registerUser)
  app.get('/v0/users', searchUsers)
  app.get('/v0/users/:id', fetchUser)
  app.patch('/v0/users/:id', setUser)
  app.delete('/v0/users/:id', deleteUser)

  app.get('/v0/users/:id/posts', searchUserPosts)

  app.get('/v0/users/:id/followers', searchFollowers)
  app.get('/v0/users/:id/followings', searchFollowings)
  app.post('/v0/users/:id/followings', registerFollowing)
  app.delete('/v0/users/:id/followings', deleteFollowing)

  app.post('/v0/users/:id/complaints', registerUserComplaint)
  app.get('/v0/users/:id/complaints', searchUserComplaints)
  app.get('/v0/users/:id/complaints/:complaint_id', fetchUserComplaint)
  app.patch('/v0/users/:id/complaints/:complaint_id', setUserComplaint)
  app.delete('/v0/users/:id/complaints/:complaint_id', deleteUserComplaint)

  app.get('/v0/users/:id/categories', searchUserCategories)
  app.post('/v0/users/:id/categories/:category_id', searchUserCategories)
  app.delete('/v0/users/:id/categories/:category_id', searchUserCategories)
}

export async function postsRoutes(app: FastifyInstance) {
  app.post('/v0/posts', registerPost)
  app.get('/v0/posts', searchPosts)
  app.get('/v0/posts/:id', fetchPost)
  app.patch('/v0/posts/:id', setPost)
  app.delete('/v0/posts/:id', deletePost)

  app.get('/v0/posts/:id/reactions', searchReactions)
  app.post('/v0/posts/:id/reactions', registerReaction)
  app.delete('/v0/posts/:id/reactions/:reaction_id', deleteReaction)

  app.get('/v0/posts/:id/thumbs', searchThumbs)
  app.post('/v0/posts/:id/thumbs', registerThumb)
  app.delete('/v0/posts/:id/thumbs/:thumb_id', deleteThumb)

  app.get('/v0/posts/:id/saves', searchSaves)
  app.post('/v0/posts/:id/saves', registerSave)
  app.delete('/v0/posts/:id/saves/:save_id', deleteSave)

  app.get('/v0/posts/:id/complaints', searchPostComplaints)
  app.post('/v0/posts/:id/complaints', registerPostComplaint)
  app.delete('/v0/posts/:id/complaints/:complaint_id', deletePostComplaint)

  app.get('/v0/posts/:id/categories', searchPostCategories)
  app.post('/v0/posts/:id/categories/:category_id', searchPostCategories)
  app.delete('/v0/posts/:id/categories/:category_id', searchPostCategories)
}

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/v0/categories', searchCategories)
  app.post('/v0/categories', setCategory)
  app.delete('/v0/categories/:id', deleteCategory)
}

export async function complaintsCategoriesRoutes(app: FastifyInstance) {
  app.get('/v0/complaint-categories', searchComplaintCategories)
  app.post('/v0/complaint-categories', setComplaintCategory)
  app.delete('/v0/complaint-categories/:id', deleteComplaintCategory)
}
