import mongoose from "mongoose"
const connectDB=(url)=>
{
    return mongoose.connect(url)
}
//const connectDB='mongodb+srv://prasanna:<password>@cluster.ptwlwjs.mongodb.net/?retryWrites=true&w=majority'
export default connectDB