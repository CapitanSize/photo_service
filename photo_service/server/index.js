const express = require('express')
const cors = require('cors')
const sequelize = require ('./db')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
app.use(express.static('static'))

const PORT = process.env.PORT || 8080

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e.message)
    }
}
start()