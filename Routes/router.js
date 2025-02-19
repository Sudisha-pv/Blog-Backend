//1 
const express=require('express')

//3 import usercontroll
const userController=require('../Controllers/userController')

const blogController=require('../Controllers/blogController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerMiddleware = require('../Middlewares/multerMiddleware')

//2 create router
const router = express.Router()



router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addBlog',jwtMiddleware,multerMiddleware.single('blogImg') ,blogController.addBlogAPI)

router.get('/api/getHomeBlog',blogController.getHomeBlog)

router.get('/api/getAUserBlog',jwtMiddleware,blogController.getAUserBlog)

router.get('/api/getAllUserBlog',blogController.getAllUserBlog)


router.put('/api/editBlog/:blogId',jwtMiddleware,multerMiddleware.single('blogImg') ,blogController.editBlogAPI)


router.delete('/api/deleteBlog/:blogId',jwtMiddleware,blogController.deleteBlogAPI)

module.exports=router