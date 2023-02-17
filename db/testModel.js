import mongoose from 'mongoose';

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    }
});

const model=mongoose.model("test",schema);
export default model;