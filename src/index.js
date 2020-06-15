const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


mongoose.connect('mongodb+srv://andra:151848@cluster0-ntyvb.mongodb.net/test?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.listen(process.env.PORT || 3333, () => {
    console.log('Aplicação rodando na porta 3333!')
})
