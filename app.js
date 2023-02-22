const express = require('express');
const app = express();
const apiRouter = require('./Routes/Apis');
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);


app.listen(3001, () => {
    console.log('Servidor escuchado')
})