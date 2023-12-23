import 'dotenv/config'
import express from 'express'

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  router.get('/', (_req, res) =>
    res.json({
      message: `hello world from home page on PORT: ${process.env.PORT}`,
    }),
  ),
)

app.listen(process.env.PORT || 3001, () => console.log('RUNNING_AT_PORT:',process.env.PORT))
