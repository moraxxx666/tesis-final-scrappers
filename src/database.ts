import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

class MongoDB{
    //URI: string = `${process.env.URI_MONGO}`;
    URI:string = "mongodb://192.168.137.3/proyecto";
    constructor(){
        console.log(this.URI);
        mongoose.set('useFindAndModify',true);
    }
    start(){
        
        mongoose.connect(this.URI,{useNewUrlParser:true}).then(db=>console.log(`MongoDB is connect`));
    }

}

const mongodb = new MongoDB();
export default mongodb;