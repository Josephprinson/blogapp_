const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
PORT=3008;
require('./DB/Connection')
const userRouter = require('./Routes/userRoutes');
const postRouter = require('./Routes/postRoute');
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use('/api',userRouter);
app.use('/api',postRouter);


app.listen(PORT,()=>{
    console.log(`Listenting to ${PORT}`)
})
