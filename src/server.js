import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'
import mongoose from 'mongoose'
import { badRequestMiddleware, catchAllErrorsMiddleware, notFoundMiddleware } from './errorMiddlewares.js'
import blogPostsRouter from './services/blogPosts/index.js'

const port = process.env.PORT || 3001

const server = express()

// ===================== MIDDLEWARES =============================
server.use(cors())
server.use(express.json())

// ===================== ROUTES  =================================
server.use("/blogPosts", blogPostsRouter)
// ===================== ERROR HANDLERS ==========================
server.use(notFoundMiddleware)
server.use(badRequestMiddleware)
server.use(catchAllErrorsMiddleware)
// ===============================================================

console.table(listEndpoints(server))

mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => 
    server.listen(port, () => {
        console.log(" ✅  Server is running on port: " + port);
    })
)
.catch(err => console.log(err))
