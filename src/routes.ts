import { Router } from 'express'
import Root from './controllers/Root'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', Root)
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes
