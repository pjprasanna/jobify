import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connect.js';
import model from './db/testModel.js';
//Middleware
import notFoundMiddleware from './middleware/not-found.js'
const app =express()
app.get('/',async (req,res)=>{
    //throw new Error('error')
    res.send('Welcome to my page')
    await model.create({'name':'prasath','rollno':123});

})
app.use(notFoundMiddleware)
import errorHandlerMiddleware from './middleware/error-handler.js'
app.use(errorHandlerMiddleware)
const port =process.env.PORT||5000

const start=async()=>
{
    try{
        await connectDB(process.env.MONGO_URL).then(()=>{
            app.listen(port,()=>{
                console.log("mongodb connection success...")
                console.log(`listen to port ${port}...`)
            })
        }
        )
        
    }
    catch(error)
    {
        console.log(error)
    }
}
start()