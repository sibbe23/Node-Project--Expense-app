const express = require('express');
const sequelize = require('./util/database')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

const userRoutes = require('./routes/userroute')
app.use(bodyParser.json({ extended: true }));
app.use(cors())
app.use('/user',userRoutes)

sequelize.sync().then(res=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})