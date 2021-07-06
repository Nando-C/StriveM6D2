import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'

const port = process.env.PORT || 3001

const server = express()

// ===================== MIDDLEWARES =============================
server.use(cors())
server.use(express.json())
// ===================== ROUTES  =================================
// ===================== ERROR HANDLERS ==========================

console.table(listEndpoints(server))

server.listen(port, () => {
    console.log(" ✅  Server is running on port: " + port);
})