require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 5000

// создаём объект вызвав функцию express.
const app = express()

// вешаем функцию и указываем какой порт будет слушать наш сервер, и колбек при ушпешном запуске
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))