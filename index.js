import express from 'express'
import {
    makeCreateParentsController,
    makeGetParentsByUserController,
} from './src/factories/controllers/parents.js'

const app = express()

app.listen(30000, () => {
    console.log('O servidor está funcionando na porta 30000')
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Fundionou legal')
})

app.post('/createParents', async (req, res) => {
    const createParentsController = makeCreateParentsController()

    const { statusCode, body } = await createParentsController.execute(req)

    res.status(statusCode).send(body)
})

app.get('/getParents', async (req, res) => {
    const getParentsByUserController = makeGetParentsByUserController()

    const { statusCode, body } = await getParentsByUserController.execute(req)

    res.status(statusCode).send(body)
})
